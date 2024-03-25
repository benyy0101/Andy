package com.a102.andy.mypage.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.Expressions;
import lombok.*;
import org.joda.time.DateTime;

import java.util.List;

@Getter
@Setter
@Builder
public class MypageHistoryDayResponseDto {
    @JsonProperty("exam")
    private List<ExamDetail> exams;
    private PaginationObject paginationObject;

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class ExamDetail {
        @JsonProperty("exam_score")
        private Integer examScore;
        @JsonProperty("question_category_name")
        private String questionCategoryName;
        @JsonProperty("mode")
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
