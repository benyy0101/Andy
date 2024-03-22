package com.a102.andy.app.solution.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemALLResponseDto {
    private String  exam_mode;
    private int question_history_seq;
    private ProblemResponseDto problemResponseDto;
    private String created_at;

}
