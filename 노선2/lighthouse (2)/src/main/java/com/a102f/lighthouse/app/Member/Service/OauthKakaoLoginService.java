package com.a102f.lighthouse.app.Member.Service;


import com.a102f.lighthouse.app.Member.Controller.Dto.*;
import com.a102f.lighthouse.app.Member.JwtToken;
import com.a102f.lighthouse.app.Member.Repository.OauthMemberLoginRepository;
import com.a102f.lighthouse.app.Member.entity.Member;
import com.a102f.lighthouse.error.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import static com.a102f.lighthouse.error.errorcode.CustomErrorCode.NO_MEMBER;

@Service
@RequiredArgsConstructor
public class OauthKakaoLoginService implements OauthService {
    private final String MEMBER_INFO_URL;
    private final String ACCESS_TOKEN_URL;
    private final String redirectUri;
    private final String clientId;
    private final String grantType;
    private final OauthMemberLoginRepository oauthMemberLoginRepository;
    private static final RestTemplate restTemplate = new RestTemplate();




    @Autowired
    public OauthKakaoLoginService(@Value("${kakao.redirect.url}") String redirectUri,
                                  @Value("${kakao.restapi.key}") String clientId,
                                  OauthMemberLoginRepository oauthMemberLoginRepository){
        this.clientId=clientId;
        this.grantType="authorization_code";
        this.ACCESS_TOKEN_URL="https://kauth.kakao.com/oauth/token";
        this.MEMBER_INFO_URL="https://kapi.kakao.com/v2/user/me";
        this.redirectUri = redirectUri;
        this.oauthMemberLoginRepository = oauthMemberLoginRepository;

    }

    public LoginResponseDto login(String authenticationCode) {
        KakaoTokenResponseDto kakaoTokenResponseDto;
        KakaoMemberInfoResponseDto kakaoMemberInfoResponseDto;
        try {
            //1. 인가코드 -> 토큰요청
            kakaoTokenResponseDto = getAccessToken(authenticationCode);
            System.out.println(kakaoTokenResponseDto.getAccessToken());
            //2. 토큰 -> 사용자 정보 요청
            kakaoMemberInfoResponseDto = getMemberInfo(kakaoTokenResponseDto.getAccessToken());
            //3. 사용자 정보 -> DB 확인
            Member member = oauthMemberLoginRepository.findById(String.valueOf(kakaoTokenResponseDto));
            if(member == null)
                throw new RestApiException(NO_MEMBER);
            JwtToken jwtToken = new JwtToken(kakaoTokenResponseDto.getToken_type(),kakaoTokenResponseDto.getAccessToken(), kakaoTokenResponseDto.getRefresh_token());
            return new LoginResponseDto(member.getUserId(),member.getUserPassword(),kakaoMemberInfoResponseDto.getProfileUrl(),jwtToken);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }


//        redisTemplate.opsForValue().set("123","1234",30);
//        System.out.println(redisTemplate.opsForValue().get("123"));
    }

    @Override
    public KakaoTokenResponseDto getAccessToken(String authenticationCode) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded;charset=utf-8");
        // 2. body 생성
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", grantType); //고정값
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectUri); //등록한 redirect uri
        params.add("code", authenticationCode);
        // 3. header + body
        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, httpHeaders);
        // 4. http 요청하기
        RestTemplate restTemplate = new RestTemplate();
        try {
            ResponseEntity<KakaoTokenResponseDto> response = restTemplate.exchange(
                    ACCESS_TOKEN_URL,
                    HttpMethod.POST,
                    httpEntity,
                    KakaoTokenResponseDto.class
            );
            // 응답 본문을 로깅합니다.
            System.out.println(response.getBody().getAccessToken());
            System.out.println("응답 본문: " + response.getBody());
            return response.getBody();
        } catch (Exception e) {
            // 오류 발생 시, 오류 메시지를 출력합니다.
            System.err.println("오류 발생: " + e.getMessage());
        }

        return null;
    }

    @Override
    public KakaoMemberInfoResponseDto getMemberInfo(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded;charset=utf-8");
        httpHeaders.add("Authorization", "Bearer " + accessToken);
        HttpEntity<String> entity = new HttpEntity<>("parameters", httpHeaders);

        try {
            ResponseEntity<KakaoMemberInfoResponseDto> response = restTemplate.exchange(
                    MEMBER_INFO_URL,
                    HttpMethod.GET,
                    entity,
                    KakaoMemberInfoResponseDto.class
            );
            // 응답 본문을 로깅합니다.
            System.out.println("응답 본문: " + response.getBody());
            return response.getBody();
        } catch (Exception e) {
            // 오류 발생 시, 오류 메시지를 출력합니다.
            System.err.println("오류 발생: " + e.getMessage());
            throw new RuntimeException(e);
        }

    }

}
