package com.a102f.lighthouse.app.Member.Controller.Dto;


import lombok.Getter;

@Getter
public class KakaoTokenResponseDto extends OauthResponse{
    private String token_type;
    private String access_token;
    private Integer expires_in;
    private String refresh_token;
    private Integer refresh_token_expires_in;
}
