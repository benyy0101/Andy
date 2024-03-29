package com.a102.andy.auth.controller.dto;

import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.auth.JwtToken;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class LoginResponseDto {
    @JsonProperty("member_id")
    private String memberId;
    @JsonProperty("kakao_nickname")
    private String nickname;
    @JsonProperty("jwtToken")
    private JwtToken jwtToken;
}
