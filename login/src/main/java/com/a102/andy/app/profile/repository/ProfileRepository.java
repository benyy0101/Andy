package com.a102.andy.app.profile.repository;

import com.a102.andy.app.profile.entity.Profile;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface ProfileRepository extends JpaRepository<Profile, Integer>, CustomProfileRepository {

}
