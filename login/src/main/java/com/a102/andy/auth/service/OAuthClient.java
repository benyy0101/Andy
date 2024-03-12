package com.a102.andy.auth.service;

import com.a102.andy.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102.andy.auth.controller.dto.OAuthMemberInfoResponse;

public interface OAuthClient {
    OAuthAccessTokenResponse getAccessToken(String code);
    OAuthMemberInfoResponse getMemberInfo(String accessToken);
}
