package com.a102.andy.auth.service;

import com.a102.andy.auth.JwtToken;
import com.a102.andy.auth.JwtTokenProvider;
import com.a102.andy.auth.controller.dto.KakaoOAuthMemberInfoResponse;
import com.a102.andy.auth.controller.dto.LoginResponseDto;
import com.a102.andy.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102.andy.app.member.entity.Member;
import com.a102.andy.app.member.repository.MemberRepository;
import com.a102.andy.error.errorcode.CustomErrorCode;
import com.a102.andy.error.exception.RestApiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

import static com.a102.andy.error.errorcode.CustomErrorCode.NO_MEMBER;

@Service
@Transactional(readOnly = true)
@Slf4j
public class OAuthService {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final KakaoOAuthClient kakaoOAuthClient;
    private final PasswordEncoder passwordEncoder;

    @Value("spring.security.oauth2.client.registration.password-salt")
    private String salt;

    public OAuthService(JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder, AuthenticationManagerBuilder authenticationManagerBuilder, MemberRepository memberRepository, KakaoOAuthClient kakaoOAuthClient) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.kakaoOAuthClient = kakaoOAuthClient;
    }

    @Transactional
    public LoginResponseDto kakaoOAuthLogin(String code) {
        KakaoOAuthMemberInfoResponse res = getKakaoUserInfo(code);
        String memberId = res.getId();
        createIfNewMember(memberId, res);
        return login(memberId);
    }

    private LoginResponseDto login(String memberId) {
        JwtToken jwtToken = makeJwtToken(memberId);

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(NO_MEMBER));

        return LoginResponseDto.builder()
                .memberId(memberId)
                .nickname(member.getNickname())
                .profileImage(member.getProfileImage())
                .jwtToken(jwtToken)
                .build();
    }

    private KakaoOAuthMemberInfoResponse getKakaoUserInfo(String code) {
        try {
            OAuthAccessTokenResponse tokenResponse = kakaoOAuthClient.getAccessToken(code);
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
        if (!memberRepository.existsById(memberId)) {
            Member member =
                    Member.builder()
                            .memberId(memberId)
                            .profileImage(res.getKakaoAccount().profile.profileImageUrl)
                            .password(passwordEncoder.encode(memberId + salt))
                            .nickname(res.getKakaoAccount().profile.nickname)
                            .roles(List.of("SOCIAL")).build();
            memberRepository.save(member);
        }
    }

}
