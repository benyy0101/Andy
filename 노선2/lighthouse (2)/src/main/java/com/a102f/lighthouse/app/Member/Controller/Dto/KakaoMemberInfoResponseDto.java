package com.a102f.lighthouse.app.Member.Controller.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
    public class KakaoMemberInfoResponseDto extends OAuthMemberInfoResponse {
    @JsonProperty("id")
    private String oauthId;

    @JsonProperty("profile_nickname")
    private String name;

    @JsonProperty("profile_image")
    private String profileUrl;


}
