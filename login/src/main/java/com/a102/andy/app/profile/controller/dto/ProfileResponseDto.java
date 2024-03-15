package com.a102.andy.app.profile.controller.dto;

import com.a102.andy.app.profile.entity.Profile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileResponseDto {
    private int childSeq;
    private String childName;
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
