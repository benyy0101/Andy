package com.a102.andy.app.profile.service;

import com.a102.andy.app.profile.controller.dto.ProfileCreateRequestDto;
import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.repository.ProfileRepository;
import com.a102.andy.error.errorcode.CustomErrorCode;
import com.a102.andy.error.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.a102.andy.error.errorcode.CustomErrorCode.NO_MEMBER;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ProfileService {
    private final ProfileRepository profileRepository;

    @Transactional
    public Profile createProfile(ProfileCreateRequestDto req) {
        System.out.println(req.getKakaoId());
        System.out.println(req.getProfileNickname());
        Profile profile = Profile.builder()
                .profileName(req.getProfileName())
                .profileNickname(req.getProfileNickname())
                .profileGender(req.getProfileGender())
                .profileBirthday(req.getProfileBirthday())
                .profilePicture(req.getProfilePicture())
                .memberId(req.getKakaoId())
                .build();
        return profileRepository.save(profile);
    }

    public void deleteProfile(Integer profileSeq) {
        Profile profile = profileRepository.findById(profileSeq).orElseThrow(() -> new RestApiException(NO_MEMBER));
        profile.delete();
    }

    @Transactional
    public ProfileResponseDto updateProfile(ProfileUpdateRequestDto req) {
        Profile profile = profileRepository.findById(req.getProfileSeq()).orElseThrow();
        profile.updateProfile(req);
        return new ProfileResponseDto(profile);
    }

    public ProfileResponseDto getProfile(Integer profileSeq) {
        return new ProfileResponseDto(profileRepository.findById(profileSeq).orElseThrow(() -> new RestApiException(NO_MEMBER)));
    }
}
