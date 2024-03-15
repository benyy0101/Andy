package com.a102.andy.auth.controller.dto;

import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.auth.JwtToken;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Getter
@Builder
@AllArgsConstructor
public class OAuthLoginResponse {
    private String kakaoNickname;
    private List<ProfileResponseDto> profiles;

    public OAuthLoginResponse(LoginResponseDto loginResponseDto) {
        this.kakaoNickname = loginResponseDto.getNickname();
        this.profiles = loginResponseDto.getProfiles();
    }
}
