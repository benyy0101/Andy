package com.a102.andy.app.profile.entity;

import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor
@Table(name = "child")
public class Profile extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "child_seq")
    private Integer profileSeq;

    @Column(name = "member_id", nullable = false)
    private String memberId;

    @Column(name = "child_name", nullable = false, length = 10)
    private String profileName;

    @Column(name = "child_nickname", nullable = false, length = 20)
    private String profileNickname;

    @Column(name = "child_birthday", nullable = false)
    private LocalDate profileBirthday;

    @Column(name = "child_gender", nullable = false, length = 1)
    private String profileGender;

    @Column(name = "child_picture", nullable = false, columnDefinition = "default_image")
    private String profilePicture;

    public void delete(){
        deleteSoftly();
    }

    public void updateProfile(ProfileUpdateRequestDto req) {
        this.profileName = req.getProfileName();
        this.profileBirthday = req.getProfileBirthday();
        this.profilePicture = req.getProfilePicture();
        this.profileGender = req.getProfileGender();
        this.profileNickname = req.getProfileNickname();
    }
}