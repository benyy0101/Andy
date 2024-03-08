package com.a102f.lighthouse.app.member.controller.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
public class MemberDetailResponseDto {
    private String memberId;
    private String nickname;
    private String profileImage;

    public MemberDetailResponseDto(String memberId, String nickname, String profileImage) {
        this.memberId = memberId;
        this.nickname = nickname;
        this.profileImage = profileImage;
    }
}