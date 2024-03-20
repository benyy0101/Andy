package com.a102.andy.mypage.controller.dto;

import lombok.Getter;

@Getter
public class MypageHistoryMonthRequestDto {
    private Integer childSeq;
    private Integer year;
    private Integer month;

    public MypageHistoryMonthRequestDto(int childSeq, int year, int month) {
        this.childSeq = childSeq;
        this.year = year;
        this.month = month;
    }
}
