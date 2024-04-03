package com.a102.andy.app.profile.service;

import com.a102.andy.app.profile.controller.dto.ProfileCreateRequestDto;
import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.app.profile.controller.dto.ProfileSingleResponseDto;
import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.repository.ProfileRepository;
import com.a102.andy.auth.JwtTokenProvider;
import com.a102.andy.error.exception.RestApiException;
import com.a102.andy.util.MemberUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.a102.andy.error.errorcode.CustomErrorCode.HEADER_ACCESS_TOKEN_NOT_EXISTS;
import static com.a102.andy.error.errorcode.CustomErrorCode.NO_MEMBER;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ProfileService {
    private final ProfileRepository profileRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public Profile createProfile(ProfileCreateRequestDto req) {
        Profile profile = Profile.builder()
                .profileName(req.getProfileName())
                .profileNickname(req.getProfileNickname())
                .profileGender(req.getProfileGender())
                .profileBirthday(req.getProfileBirthday())
                .profilePicture(req.getProfilePicture())
                .memberId(MemberUtil.getMemberId())
                .build();
        return profileRepository.save(profile);
    }

    @Transactional
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

    public ProfileSingleResponseDto getProfile(Integer profileSeq) {
        return new ProfileSingleResponseDto(profileRepository.findById(profileSeq).orElseThrow(() -> new RestApiException(NO_MEMBER)));
    }

    public List<ProfileResponseDto> getProfileList() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null) {
            String userId = authentication.getName();
            List<Profile> profiles = profileRepository.findByMemberId(userId);

            return profiles.stream()
                    .map(ProfileResponseDto::new)
                    .collect(Collectors.toList());
        }
        throw new RestApiException(HEADER_ACCESS_TOKEN_NOT_EXISTS);
    }
}
