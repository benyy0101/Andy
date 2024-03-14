package com.a102.andy.auth.controller.dto;

import com.a102.andy.auth.JwtToken;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class LoginResponseDto {

    private String memberId;
    private String nickname;
    private JwtToken jwtToken;

}
