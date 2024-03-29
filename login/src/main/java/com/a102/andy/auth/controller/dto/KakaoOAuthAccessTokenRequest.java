package com.a102.andy.auth.controller.dto;

import com.a102.andy.common.enums.RedirectUri;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class KakaoOAuthAccessTokenRequest {

    @JsonProperty("grant_type")
    private String grantType = "authorization_code";

    @JsonProperty("client_id")
    private String clientId;

    @JsonProperty("redirect_uri")
    private String redirectUri = RedirectUri.KAKAO_OAUTH.getUri();

    @JsonProperty("code")
    private String code;

    public KakaoOAuthAccessTokenRequest(String clientId, String code) {
        this.clientId = clientId;
        this.code = code;
    }
}