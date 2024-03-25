package com.a102.andy.app.solution.controller.dto;

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
    private String  exam_mode;
    private int question_history_seq;
    private ProblemResponseDto problemResponseDto;
    private LocalDateTime created_at;

    public ProblemALLResponseDto(String exam_mode, int question_history_seq, int questionSeq, String questionPicture, String questionName, LocalDateTime created_at) {
        this.exam_mode = exam_mode;
        this.question_history_seq = question_history_seq;
        this.problemResponseDto = new ProblemResponseDto(questionSeq, questionPicture, questionName);
        this.created_at = created_at;
    }
}
