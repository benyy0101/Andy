package com.a102.andy.app.profile.controller;

import com.a102.andy.app.profile.controller.dto.ProfileCreateRequestDto;
import com.a102.andy.app.profile.controller.dto.ProfileResponseDto;
import com.a102.andy.app.profile.service.ProfileService;
import com.a102.andy.image.service.S3UploadService;
import com.a102.andy.util.MemberUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
@Slf4j
public class ProfileController {

    private final ProfileService profileService;
    private final S3UploadService s3UploadService;

    @PostMapping("")
    public ResponseEntity<ProfileResponseDto> createProfile(@RequestBody ProfileCreateRequestDto req) {
        ProfileResponseDto res = new ProfileResponseDto(profileService.createProfile(req));
        return ResponseEntity.ok(res);
    }

    @DeleteMapping("")
    public ResponseEntity<Void> deleteProfile(@RequestParam Integer profileSeq) {
        profileService.deleteProfile(profileSeq);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("")
    public ResponseEntity<ProfileResponseDto> updateProfile(@RequestBody ProfileCreateRequestDto req) {
        String memberId = MemberUtil.getMemberId();
        System.out.println(memberId);
//        ProfileResponseDto res = profileService.updateProfile(req);
//        return ResponseEntity.ok(res);
        return null;
    }

    @GetMapping("/{profileSeq}")
    public ResponseEntity<ProfileResponseDto> getProfile(@PathVariable Integer profileSeq) {
        return ResponseEntity.ok(profileService.getProfile(profileSeq));
    }

    @PostMapping("/image")
    public ResponseEntity<String> createProfileImage(@RequestBody MultipartFile profileImageFile) throws IOException {
        String uploadedImageUrl = s3UploadService.saveFile(profileImageFile, "profiles/");
        return ResponseEntity.ok(uploadedImageUrl);
    }

}
