package com.a102.andy.app.profile.repository;
import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;

import java.util.List;

public interface CustomProfileRepository {
    List<Profile> findByMemberId(String memberId);
}
