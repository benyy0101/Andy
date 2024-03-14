package com.a102.andy;

import com.a102.andy.app.profile.controller.dto.ProfileCreateRequestDto;
import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.repository.ProfileRepository;
import com.a102.andy.app.profile.service.ProfileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
public class ProfileServiceTest {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ProfileRepository profileRepository;

    private ProfileCreateRequestDto req;

    @BeforeEach
    void setUp() {
        // 공통으로 사용되는 프로필 정보를 미리 설정
        req = ProfileCreateRequestDto.builder()
                .profileName("홍길동")
                .profileNickname("길동이")
                .profileGender("M")
                .profileBirthday(LocalDateTime.now().toLocalDate())
                .profilePicture("profilePictureUrl")
                .kakaoId("3378155911")
                .build();
    }

    private Profile createTestProfile() {
        return profileService.createProfile(req);
    }

    @Test
    void createProfileTest() {
        // when: 테스트 대상 메소드 실행
        Profile createdProfile = createTestProfile();

        // then: 결과 검증
        assertNotNull(createdProfile.getMemberId()); // 생성된 프로필의 ID가 null이 아닌지 확인
        assertEquals(req.getProfileName(), createdProfile.getProfileName());
        assertEquals(req.getProfileNickname(), createdProfile.getProfileNickname());
        assertEquals(req.getProfileGender(), createdProfile.getProfileGender());

        // 데이터베이스에 실제로 저장되었는지 확인
        Profile foundProfile = profileRepository.findById(createdProfile.getProfileSeq()).get();
        assertNotNull(foundProfile); // 데이터베이스에서 찾은 프로필이 null이 아닌지 확인
        assertEquals(req.getProfileName(), foundProfile.getProfileName());
    }

    @Test
    void deleteProfileTest() {
        // given: 프로필 생성
        Profile createdProfile = createTestProfile();

        // when: 생성된 프로필 삭제
        profileService.deleteProfile(createdProfile.getProfileSeq());

        // then: 삭제된 프로필의 is_deleted 값이 true인지 확인
        Profile deletedProfile = profileRepository.findById(createdProfile.getProfileSeq())
                .orElseThrow(() -> new AssertionError("프로필이 데이터베이스에서 찾을 수 없습니다."));
        assertTrue(deletedProfile.getIsDeleted(), "프로필이 삭제되지 않았습니다.");
    }

    @Test
    void updateProfileTest() {
        // given: 프로필 생성
        Profile createdProfile = createTestProfile();
        System.out.println(createdProfile.getProfileSeq());
        // 새로운 프로필 정보 설정
        ProfileUpdateRequestDto updateReq = ProfileUpdateRequestDto.builder()
                .profileSeq(createdProfile.getProfileSeq())
                .profileName("변경된홍길동")
                .profileNickname("변경된길동이")
                .profileGender("F")
                .profileBirthday(LocalDateTime.now().minusYears(1).toLocalDate()) // 예시로 1년 전으로 설정
                .profilePicture("updatedProfilePictureUrl")
                .build();

        // when: 프로필 업데이트 실행
        profileService.updateProfile(updateReq);

        // then: 업데이트된 프로필 정보 확인
        Profile updatedProfile = profileRepository.findById(createdProfile.getProfileSeq()).get();
        System.out.println(updatedProfile.getProfileNickname());
        System.out.println(updatedProfile.getProfileSeq());
        // 업데이트된 값들이 정상적으로 반영되었는지 검증
        assertEquals(updateReq.getProfileName(), updatedProfile.getProfileName());
        assertEquals(updateReq.getProfileNickname(), updatedProfile.getProfileNickname());
        assertEquals(updateReq.getProfileGender(), updatedProfile.getProfileGender());
        // 그 외 필요한 필드들에 대한 검증도 추가할 수 있습니다.

        // 기존의 정보와 업데이트된 정보가 다른지 확인
        assertNotEquals(req.getProfileName(), updatedProfile.getProfileName());
        assertNotEquals(req.getProfileNickname(), updatedProfile.getProfileNickname());
        assertNotEquals(req.getProfileGender(), updatedProfile.getProfileGender());
    }

}
