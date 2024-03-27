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
    @JsonProperty("question_history_seq")
    private int questionHistorySeq;
    private ProblemResponseDto problemResponseDto;
    @JsonProperty("created_at")
    private LocalDateTime createdAt;

}
