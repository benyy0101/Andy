package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class AnswerResponseDto {
    @JsonProperty("question_seq")
    private int AnswerSeq;
    @JsonProperty("question_history_is_ok")
    private boolean AnswerIsOk;
}
