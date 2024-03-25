package com.a102.andy.app.profile.controller.dto;

import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.util.MemberUtil;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ProfileSingleResponseDto {
    @JsonProperty("kakao_id")
    private String kakaoId;
    @JsonProperty("child_name")
    private String childName;
    @JsonProperty("child_nickname")
    private String childNickname;
    @JsonProperty("child_birthday")
    private LocalDate childBirthday;
    @JsonProperty("child_gender")
    private String childGender;
    @JsonProperty("child_picture")
    private String childPicture;

    public ProfileSingleResponseDto(Profile profile) {
        this.kakaoId = MemberUtil.getMemberId();
        this.childName = profile.getProfileName();
        this.childNickname = profile.getProfileNickname();
        this.childBirthday = profile.getProfileBirthday();
        this.childGender = profile.getProfileGender();
        this.childPicture = profile.getProfilePicture();
    }
}
