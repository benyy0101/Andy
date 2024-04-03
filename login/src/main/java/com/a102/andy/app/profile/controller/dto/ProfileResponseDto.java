package com.a102.andy.app.profile.controller.dto;

import com.a102.andy.app.profile.entity.Profile;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileResponseDto {
    @JsonProperty("child_seq")
    private int childSeq;
    @JsonProperty("child_name")
    private String childName;
    @JsonProperty("child_picture")
    private String childPicture;

    public ProfileResponseDto(int childSeq, String childName, String childPicture) {
        this.childSeq = childSeq;
        this.childName = childName;
        this.childPicture = childPicture;
    }

    public ProfileResponseDto(Profile profile) {
        this.childSeq = profile.getProfileSeq();
        this.childName = profile.getProfileName();
        this.childPicture = profile.getProfilePicture();
    }
}
