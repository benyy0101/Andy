package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.entity.Exam;
import com.a102.andy.mypage.entity.QuestionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MypageRepository extends JpaRepository<QuestionHistory, Integer>, MypageCustomRepository {
}
