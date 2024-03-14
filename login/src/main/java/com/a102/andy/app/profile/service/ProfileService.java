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

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ProfileService {
    private final ProfileRepository profileRepository;

    @Transactional
    public Profile createProfile(ProfileCreateRequestDto req) {
        Profile profile = Profile.builder()
                .profileName(req.getProfileName())
                .profileNickname(req.getProfileNickname())
                .profileGender(req.getProfileGender())
                .profileBirthday(req.getProfileBirthday().atStartOfDay())
                .profilePicture(req.getProfilePicture())
                .memberId(req.getKakaoId())
                .build();
        return profileRepository.save(profile);
    }

    public void deleteProfile(Integer profileSeq) {
        Profile profile = profileRepository.findById(profileSeq).orElseThrow(() -> new RestApiException(CustomErrorCode.NO_MEMBER));
        profile.delete();
    }

    @Transactional
    public ProfileResponseDto updateProfile(ProfileUpdateRequestDto req) {

        profileRepository.updateProfile(req.getProfileSeq(), req.getProfileName(), req.getProfileBirthday().atStartOfDay(), req.getProfilePicture(), req.getProfileGender(), req.getProfileNickname());

        return new ProfileResponseDto(profileRepository.findById(req.getProfileSeq()).get());
    }

    public ProfileResponseDto getProfile(String profileSeq) {
        return null;
    }
}
