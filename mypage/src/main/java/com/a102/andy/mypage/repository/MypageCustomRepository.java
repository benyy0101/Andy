package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.controller.dto.MypageHistoryDayRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayResponseDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;

import java.util.Optional;

public interface MypageCustomRepository {
    Optional<MypageHistoryMonthResponseDto> readMonthHistory(MypageHistoryMonthRequestDto req);

    Optional<MypageHistoryDayResponseDto> readDayHistory(MypageHistoryDayRequestDto req);
}
