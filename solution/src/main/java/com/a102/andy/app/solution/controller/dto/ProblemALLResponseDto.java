package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemALLResponseDto {
    private List<Problem> problem; // 문제 리스트
    @Data
    @AllArgsConstructor
    public static class Problem {
        @JsonProperty("exam_mode")
        private String examMode;
        @JsonProperty("question_history_seq")
        private int questionHistorySeq;
        @JsonProperty("question_seq")
        private int questionSeq;
        @JsonProperty("question_picture")
        private String questionPicture;
        @JsonProperty("question_name")
        private String questionName;
        @JsonProperty("created_at")
        private LocalDateTime createdAt;
    }
}