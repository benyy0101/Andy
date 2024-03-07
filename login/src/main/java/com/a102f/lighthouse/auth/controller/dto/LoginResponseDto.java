package com.a102f.lighthouse.auth.controller.dto;

import com.a102f.lighthouse.auth.JwtToken;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class LoginResponseDto {

    private String memberId;
    private String nickname;
    private String profileImage;
    private JwtToken jwtToken;

}
