package com.a102.andy.mypage.controller.dto;

import lombok.Getter;
import org.joda.time.DateTime;

import java.util.List;

@Getter
public class MypageHistoryMonthResponseDto {
    private List<DateTime> exams;
}
