package com.a102.andy.mypage.controller.dto;

import lombok.Getter;

@Getter
public class MypageHistoryDayRequestDto {
    private Integer childSeq;
    private Integer year;
    private Integer month;
    private Integer day;

    public MypageHistoryDayRequestDto(int childSeq, int year, int month, int day) {
        this.childSeq = childSeq;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
