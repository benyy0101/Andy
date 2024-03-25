package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemALLResponseDto {
    @JsonProperty("exam_mode")
    private String examMode;
    @JsonProperty("queestion_history_seq")
    private int questionHistorySeq;
    private ProblemResponseDto problemResponseDto;
    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    public ProblemALLResponseDto(String exam_mode, int question_history_seq, int questionSeq, String questionPicture, String questionName, LocalDateTime created_at) {
        this.examMode = exam_mode;
        this.questionHistorySeq = question_history_seq;
        this.problemResponseDto = new ProblemResponseDto(questionSeq, questionPicture, questionName);
        this.createdAt = created_at;
    }
}
