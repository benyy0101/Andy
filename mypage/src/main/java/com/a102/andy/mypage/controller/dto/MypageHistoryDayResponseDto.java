package com.a102.andy.mypage.controller.dto;

import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.Expressions;
import lombok.*;
import org.joda.time.DateTime;

import java.util.List;

@Getter
@Setter
@Builder
public class MypageHistoryDayResponseDto {
    private List<ExamDetail> exams;
    private PaginationObject paginationObject;

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class ExamDetail {
        private Integer examScore;
        private String questionCategoryName;
        private String examMode;

        public ExamDetail(Tuple tuple) {
            this.examScore = tuple.get(Expressions.path(Integer.class, "examScore"));
            this.questionCategoryName = tuple.get(Expressions.path(String.class, "questionCategoryName"));
            this.examMode = tuple.get(Expressions.path(String.class, "examMode"));
        }
    }

    @Getter
    @Setter
    @Builder
    public static class PaginationObject {
        private int page;
        private int size;
        private long totalElements;
    }
}
