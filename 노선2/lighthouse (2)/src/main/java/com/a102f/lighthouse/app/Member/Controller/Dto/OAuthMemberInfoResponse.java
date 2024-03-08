package com.a102f.lighthouse.app.Member.Controller.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OAuthMemberInfoResponse {
    private String oauthId;
    private String name;
    private String profileUrl;

}
