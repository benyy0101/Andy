package com.a102f.lighthouse.app.member.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
public class MemberDetailResponseDto {
    private String memberId;
    private String name;
    private String nickname;
    private String profileImage;
    private String email;

    public MemberDetailResponseDto(String memberId, String name, String nickname, String profileImage, String email) {
        this.memberId = memberId;
        this.name = name;
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.email = email;
    }
}