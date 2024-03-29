package com.a102.andy.auth.service;

import com.a102.andy.app.profile.repository.ProfileRepository;
import com.a102.andy.auth.JwtToken;
import com.a102.andy.auth.JwtTokenProvider;
import com.a102.andy.auth.controller.dto.KakaoOAuthMemberInfoResponse;
import com.a102.andy.auth.controller.dto.LoginResponseDto;
import com.a102.andy.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102.andy.app.member.entity.Member;
import com.a102.andy.app.member.repository.MemberRepository;
import com.a102.andy.auth.repository.JwtRedisRepository;
import com.a102.andy.error.errorcode.CustomErrorCode;
import com.a102.andy.error.exception.RestApiException;
import com.a102.andy.util.AES128Util;
import com.a102.andy.util.KeyUtil;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

import static com.a102.andy.error.errorcode.CustomErrorCode.*;

@Service
@Transactional(readOnly = true)
@Slf4j
public class OAuthService {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final JwtRedisRepository jwtRedisRepository;
    private final KakaoOAuthClient kakaoOAuthClient;
    private final PasswordEncoder passwordEncoder;
    private final AES128Util aes128Util;

    @Value("spring.security.oauth2.client.registration.password-salt")
    private String salt;

    public OAuthService(JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder, AuthenticationManagerBuilder authenticationManagerBuilder, MemberRepository memberRepository, JwtRedisRepository jwtRedisRepository, KakaoOAuthClient kakaoOAuthClient, AES128Util aes128Util) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtRedisRepository = jwtRedisRepository;
        this.kakaoOAuthClient = kakaoOAuthClient;
        this.aes128Util = aes128Util;
    }

    @Transactional
    public LoginResponseDto kakaoOAuthLogin(String status, String code) {
        KakaoOAuthMemberInfoResponse res = getKakaoUserInfo(status, code);
        String memberId = res.getId();
        createIfNewMember(memberId, res);
        return login(memberId);
    }

    private LoginResponseDto login(String memberId) {
        JwtToken jwtToken = makeJwtToken(memberId);

        Member member = memberRepository.findByParentId(memberId).orElseThrow(() -> new RestApiException(NO_MEMBER));

        return LoginResponseDto.builder()
                .memberId(memberId)
                .nickname(member.getNickname())
                .jwtToken(jwtToken)
                .build();
    }

    private KakaoOAuthMemberInfoResponse getKakaoUserInfo(String status, String code) {
        try {
            OAuthAccessTokenResponse tokenResponse = kakaoOAuthClient.getAccessToken(status, code);
            return kakaoOAuthClient.getMemberInfo(tokenResponse.getAccessToken());
        } catch (HttpClientErrorException e) {
            throw new RestApiException(CustomErrorCode.KAKAO_AUTHORIZATION_ERROR);
        }
    }

    private JwtToken makeJwtToken(String memberId) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberId, memberId+salt);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        return jwtTokenProvider.generateToken(authentication);
    }

    private void createIfNewMember(String memberId, KakaoOAuthMemberInfoResponse res) {
        if (!memberRepository.existsByMemberId(memberId)) {
            Member member =
                    Member.builder()
                            .memberId(memberId)
                            .password(passwordEncoder.encode(memberId + salt))
                            .nickname(res.getKakaoAccount().profile.nickname)
                            .roles(List.of("SOCIAL")).build();
            memberRepository.save(member);
        }
    }

    @Transactional
    public void logout(String memberId){
        jwtRedisRepository.delete(KeyUtil.getRefreshTokenKey(memberId));
    }

    public String reissueAccessToken(String encryptedRefreshToken) {
        // 유저가 제공한 refreshToken이 있는지 확인
        if (encryptedRefreshToken == null) throw new RestApiException(COOKIE_REFRESH_TOKEN_NOT_EXISTS);

        String refreshToken = aes128Util.decryptAes(encryptedRefreshToken);

        // userId 정보를 가져와서 redis에 있는 refreshtoken과 같은지 확인
        Claims claims = jwtTokenProvider.parseClaims(refreshToken);
        String memberId = claims.getSubject();
        String redisRefreshToken = jwtRedisRepository.find(KeyUtil.getRefreshTokenKey(memberId));
        if (redisRefreshToken == null || !redisRefreshToken.equals(refreshToken))
            throw new RestApiException(INVALID_REFRESH_TOKEN);
        // 같다면 refreshToken을 활용하여 새로운 accessToken을 발급
        return jwtTokenProvider.generateAccessToken(memberId, claims.get("auth").toString());
    }
}
