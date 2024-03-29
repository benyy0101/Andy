package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MypageRepository extends JpaRepository<Exam, Integer>, MypageCustomRepository {
}
