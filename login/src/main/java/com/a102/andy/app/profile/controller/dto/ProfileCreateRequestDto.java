package com.a102.andy.app.profile.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class ProfileCreateRequestDto {
    private String kakaoId;
    private String profileName;
    private String profileNickname;
    private LocalDate profileBirthday;
    private String profileGender;
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
