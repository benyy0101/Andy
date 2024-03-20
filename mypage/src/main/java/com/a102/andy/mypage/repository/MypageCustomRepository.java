package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.entity.QuestionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MypageCustomRepository {
    Optional<MypageHistoryMonthResponseDto> readMonthHistory(Integer childSeq);
}
