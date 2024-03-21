package com.a102.andy.mypage.controller.dto;

import com.a102.andy.mypage.entity.Exam;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.joda.time.DateTime;

import java.util.List;

@Getter
@Setter
@Builder
public class MypageHistoryDayResponseDto {
    private List<ExamDetail> exam;
    private PaginationObject paginationObject;

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class ExamDetail {
        private Integer examScore;
        private String questionCategoryName;
        private String mode;

        public ExamDetail(Exam exam) {
            this.examScore = exam.getExamScore();
            this.questionCategoryName = exam.getCategory().getQuestionCategoryName();
            this.mode = exam.getExamMode();
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
