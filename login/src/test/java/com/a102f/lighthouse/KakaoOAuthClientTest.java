package com.a102f.lighthouse;

import com.a102f.lighthouse.auth.controller.dto.KakaoOAuthMemberInfoResponse;
import com.a102f.lighthouse.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102f.lighthouse.auth.controller.dto.OAuthMemberInfoResponse;
import com.a102f.lighthouse.auth.service.KakaoOAuthClient;
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
        authorizationCode = "VcY8r4RLx3cI-z-QRnJebTdHDpgvCxpn-75GnkFKzMssfUXWC30aZW5lwLcKKwymAAABjhc3LBuGtS2__sNdBQ";
    }

    @Test
    public void testGetAccessToken() {
//        OAuthAccessTokenResponse response = kakaoOAuthClient.getAccessToken(authorizationCode);
//
//        assertNotNull(response);
//        assertNotNull(response.getAccessToken());
    }

    @Test
    public void testGetMemberInfo() {
//        OAuthAccessTokenResponse accessTokenResponse = kakaoOAuthClient.getAccessToken(authorizationCode);
//
//        KakaoOAuthMemberInfoResponse memberInfoResponse = (KakaoOAuthMemberInfoResponse)kakaoOAuthClient.getMemberInfo(accessTokenResponse.getAccessToken());
//
//        assertNotNull(memberInfoResponse);
//        assertNotNull(memberInfoResponse.getKakaoAccount().profile.nickname);

    }
}
