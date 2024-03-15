package com.a102.andy;

import com.a102.andy.app.profile.controller.dto.ProfileCreateRequestDto;
import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.repository.ProfileRepository;
import com.a102.andy.app.profile.service.ProfileService;
import com.a102.andy.error.exception.RestApiException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
public class ProfileServiceTest {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ProfileRepository profileRepository;

    private ProfileCreateRequestDto req;
    private Profile testProfile;

    @BeforeEach
    void setUp() {
        req = ProfileCreateRequestDto.builder()
                .profileName("홍길동")
                .profileNickname("길동이")
                .profileGender("M")
                .profileBirthday(LocalDateTime.now().toLocalDate())
                .profilePicture("profilePictureUrl")
                .kakaoId("3378155911")
                .build();
        testProfile = profileService.createProfile(req);
    }

    @AfterEach
    void tearDown() {
        Integer seq = testProfile.getProfileSeq();
        profileRepository.deleteById(seq);
        assertThrows(RestApiException.class, () -> profileService.getProfile(seq));
    }

    @Test
    void createProfileTest() {
        // when
        Profile createdProfile = profileRepository.findById(testProfile.getProfileSeq()).orElse(null);

        // then
        assertNotNull(createdProfile);
        assertEquals(req.getProfileName(), createdProfile.getProfileName());
        assertEquals(req.getProfileNickname(), createdProfile.getProfileNickname());
        assertEquals(req.getProfileGender(), createdProfile.getProfileGender());
    }

    @Test
    void deleteProfileTest() {
        // when
        profileService.deleteProfile(testProfile.getProfileSeq());

        // then
        Optional<Profile> deletedProfile = profileRepository.findById(testProfile.getProfileSeq());
        assertTrue(deletedProfile.isEmpty() || deletedProfile.get().getIsDeleted());
    }

    @Test
    void updateProfileTest() {
        // given
        ProfileUpdateRequestDto updateReq = ProfileUpdateRequestDto.builder()
                .profileSeq(testProfile.getProfileSeq())
                .profileName("변경된홍길동")
                .profileNickname("변경된길동이")
                .profileBirthday(LocalDateTime.now().minusYears(1).toLocalDate())
                .profileGender("F")
                .profilePicture("updatedProfilePictureUrl")
                .build();

        // when
        profileService.updateProfile(updateReq);

        // then
        Profile updatedProfile = profileRepository.findById(testProfile.getProfileSeq()).orElse(null);
        assertNotNull(updatedProfile);
        assertEquals(updateReq.getProfileName(), updatedProfile.getProfileName());
        assertEquals(updateReq.getProfileNickname(), updatedProfile.getProfileNickname());
        assertEquals(updateReq.getProfileGender(), updatedProfile.getProfileGender());
    }

    @Test
    void getProfileTest() {
        // when
        ProfileResponseDto resultDto = profileService.getProfile(testProfile.getProfileSeq());

        // then
        assertNotNull(resultDto);
        assertEquals(testProfile.getProfileSeq(), resultDto.getChildSeq());
        assertEquals(testProfile.getProfileName(), resultDto.getChildName());
        assertEquals(testProfile.getProfilePicture(), resultDto.getChildPicture());
    }
}
