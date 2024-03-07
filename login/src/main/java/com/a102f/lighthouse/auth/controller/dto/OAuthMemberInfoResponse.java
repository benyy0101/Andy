package com.a102f.lighthouse.auth.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class OAuthMemberInfoResponse {

    private String oauthId;

    private String name;

    private String profileUrl;

    private String email;

}