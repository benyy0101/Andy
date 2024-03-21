package com.a102.andy.mypage.controller.dto;

import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
public class MypageHistoryMonthResponseDto {
    private Set<Integer> exams;

    public MypageHistoryMonthResponseDto(Set<Integer> res) {
        this.exams = res;
    }
}
