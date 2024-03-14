//package com.a102.andy;
//
//
//import com.a102.andy.app.member.entity.Member;
//import com.a102.andy.app.member.repository.MemberRepository;
//import com.a102.andy.auth.JwtTokenProvider;
//import com.a102.andy.auth.controller.dto.KakaoOAuthMemberInfoResponse;
//import com.a102.andy.auth.controller.dto.LoginResponseDto;
//import com.a102.andy.auth.controller.dto.OAuthAccessTokenResponse;
//import com.a102.andy.auth.controller.dto.OAuthMemberInfoResponse;
//import com.a102.andy.auth.service.OAuthClient;
//import com.a102.andy.auth.service.OAuthService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//public class OAuthServiceTest {
//
//    @InjectMocks
//    private OAuthService oAuthService;
//
//    @Mock
//    private JwtTokenProvider jwtTokenProvider;
//
//    @Mock
//    private AuthenticationManagerBuilder authenticationManagerBuilder;
//
//    @Mock
//    private MemberRepository memberRepository;
//
//    @Mock
//    private OAuthClient kakaoOAuthClient;
//
//    @Mock
//    private AuthenticationManager authenticationManager;
//
//    @BeforeEach
//    public void setUp() {
//        MockitoAnnotations.openMocks(this);
//        when(authenticationManagerBuilder.getObject()).thenReturn(authenticationManager);
//    }
//
//    @Test
//    public void kakaoOAuthLoginTest() {
//        // 카카오 로그인 인증 코드를 설정
//        String code = "test_code";
//
//        // OAuthAccessTokenResponse 클래스의 가짜 객체 생성
//        OAuthAccessTokenResponse tokenResponse = mock(OAuthAccessTokenResponse.class);
//        // KakaoOAuthMemberInfoResponse 클래스의 가짜 객체 생성
//        OAuthMemberInfoResponse memberInfoResponse = mock(KakaoOAuthMemberInfoResponse.class);
//        // Member 클래스의 가짜 객체 생성
//        Member member = mock(Member.class);
//
//        // 가짜 객체의 메소드가 호출되면 특정 값 반환 설정
//        when(tokenResponse.getAccessToken()).thenReturn("test_access_token");
//        when(memberInfoResponse.getOauthId()).thenReturn("123");
//        when(memberInfoResponse.getName()).thenReturn("test_nickname");
//
//        // 가짜 회원 객체에 대한 반환 값 설정
//        when(member.getMemberId()).thenReturn("123");
//        when(member.getNickname()).thenReturn("test_nickname");
//
//        // 가짜 KakaoOAuthClient 객체에 대한 반환 값 설정
//        when(kakaoOAuthClient.getAccessToken(code)).thenReturn(tokenResponse);
//        when(kakaoOAuthClient.getMemberInfo(any())).thenReturn(memberInfoResponse);
//        when(memberRepository.existsById(any())).thenReturn(true);
//        when(memberRepository.findById(any())).thenReturn(Optional.of(member));
//
//        // 카카오 OAuth 로그인 메소드 호출
//        LoginResponseDto loginResponseDto = oAuthService.kakaoOAuthLogin(code);
//
//        // 메소드 호출 횟수 검증
//        verify(kakaoOAuthClient, times(1)).getAccessToken(code);
//        verify(kakaoOAuthClient, times(1)).getMemberInfo(any());
//        verify(memberRepository, times(1)).existsById(any());
//
//        // 결과 출력
//        System.out.println(loginResponseDto.getMemberId());
//        System.out.println(member.getMemberId());
//
//        // 결과 검증
//        assertEquals(loginResponseDto.getMemberId(), member.getMemberId());
//        assertEquals(loginResponseDto.getNickname(), member.getNickname());
//    }
//}
