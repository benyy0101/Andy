package com.a102.andy.auth.service;

import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.repository.ProfileRepository;
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
import java.util.stream.Collectors;

import static com.a102.andy.error.errorcode.CustomErrorCode.NO_MEMBER;

@Service
@Transactional(readOnly = true)
@Slf4j
public class OAuthService {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final ProfileRepository profileRepository;
    private final KakaoOAuthClient kakaoOAuthClient;
    private final PasswordEncoder passwordEncoder;

    @Value("spring.security.oauth2.client.registration.password-salt")
    private String salt;

    public OAuthService(JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder, AuthenticationManagerBuilder authenticationManagerBuilder, MemberRepository memberRepository, ProfileRepository profileRepository, KakaoOAuthClient kakaoOAuthClient) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.profileRepository = profileRepository;
        this.kakaoOAuthClient = kakaoOAuthClient;
    }

    @Transactional
    public LoginResponseDto kakaoOAuthLogin(String code) {
        KakaoOAuthMemberInfoResponse res = getKakaoUserInfo(code);
        System.out.println(res.getId());
        String memberId = res.getId();
        createIfNewMember(memberId, res);
        return login(memberId);
    }

    private LoginResponseDto login(String memberId) {
        JwtToken jwtToken = makeJwtToken(memberId);

        Member member = memberRepository.findByParentId(memberId).orElseThrow(() -> new RestApiException(NO_MEMBER));
        List<Profile> profiles = profileRepository.findByMemberId(memberId);

        // profile 리스트를 profileResponseDto 리스트로 변환
        List<ProfileResponseDto> profileResponseDtos = profiles.stream()
                .map(ProfileResponseDto::new) // profile 객체를 profileResponseDto 객체로 변환
                .collect(Collectors.toList()); // 결과를 List로 수집


        return LoginResponseDto.builder()
                .memberId(memberId)
                .nickname(member.getNickname())
                .jwtToken(jwtToken)
                .profiles(profileResponseDtos)
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

}
