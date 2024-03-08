package com.a102f.lighthouse.app.Member.Controller.Dto;

import com.a102f.lighthouse.app.Member.JwtToken;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponseDto {

    private String memberId;
    private String nickname;
    private String profileImage;
    private JwtToken jwtToken;
}
