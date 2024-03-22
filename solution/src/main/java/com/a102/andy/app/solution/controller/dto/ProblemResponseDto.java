package com.a102.andy.app.solution.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemResponseDto {
    private int questionSeq;
    private String questionPicture;
    private String questionName;
}
