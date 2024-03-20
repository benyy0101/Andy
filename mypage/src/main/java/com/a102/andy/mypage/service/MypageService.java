package com.a102.andy.mypage.service;

import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.repository.MypageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MypageService {
    private MypageRepository mypageRepository;
    public List<MypageHistoryMonthResponseDto> readMonthHistory(MypageHistoryMonthRequestDto req) {
        return mypageRepository.readMonthHistory(req.getChildSeq());
    }

    public MypageHistoryMonthResponseDto readDayHistory(MypageHistoryMonthRequestDto req) {
        return null;
    }
}
