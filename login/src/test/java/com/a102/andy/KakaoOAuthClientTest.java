package com.a102.andy;

import com.a102.andy.auth.controller.dto.KakaoOAuthMemberInfoResponse;
import com.a102.andy.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102.andy.auth.service.KakaoOAuthClient;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class KakaoOAuthClientTest {

    @Autowired
    private KakaoOAuthClient kakaoOAuthClient;

    private String authorizationCode;

    @BeforeEach
    public void setUp() {
        authorizationCode = "nPGgVNanMkKBIkhMspVikYsO74ftkM2iMKR--R6FJGj_ZfQHpJNEKcgqSl0KKwzUAAABjhzoNCN-jFVpBnvzXw";
    }

    @Test
    public void testGetAccessToken() {
        OAuthAccessTokenResponse response = kakaoOAuthClient.getAccessToken(authorizationCode);
        assertNotNull(response);
        assertNotNull(response.getAccessToken());
    }

    @Test
    public void testGetMemberInfo() {
        OAuthAccessTokenResponse accessTokenResponse = kakaoOAuthClient.getAccessToken(authorizationCode);

        KakaoOAuthMemberInfoResponse memberInfoResponse = kakaoOAuthClient.getMemberInfo(accessTokenResponse.getAccessToken());

        assertNotNull(memberInfoResponse);
        assertNotNull(memberInfoResponse.getKakaoAccount().profile.nickname);

    }
}
