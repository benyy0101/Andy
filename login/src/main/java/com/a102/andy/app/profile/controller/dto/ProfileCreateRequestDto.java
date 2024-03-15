package com.a102.andy.app.profile.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class ProfileCreateRequestDto {
    @JsonProperty("kakao_id")
    private String kakaoId;
    @JsonProperty("child_name")
    private String profileName;
    @JsonProperty("child_nickname")
    private String profileNickname;
    @JsonProperty("child_birthday")
    private LocalDate profileBirthday;
    @JsonProperty("child_gender")
    private String profileGender;
    @JsonProperty("child_picture")
    private String profilePicture;

    public ProfileCreateRequestDto(String kakaoId, String profileName, String profileNickname, LocalDate profileBirthday, String profileGender, String profilePicture) {
        this.kakaoId = kakaoId;
        this.profileName = profileName;
        this.profileNickname = profileNickname;
        this.profileBirthday = profileBirthday;
        this.profileGender = profileGender;
        this.profilePicture = profilePicture;
    }
}
