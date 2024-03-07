package com.a102f.lighthouse.auth.service;

import com.a102f.lighthouse.auth.controller.dto.OAuthAccessTokenResponse;
import com.a102f.lighthouse.auth.controller.dto.OAuthMemberInfoResponse;

public interface OAuthClient {
    OAuthAccessTokenResponse getAccessToken(String code);
    OAuthMemberInfoResponse getMemberInfo(String accessToken);
}
