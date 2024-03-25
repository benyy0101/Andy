package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResultUpdateRequestDto {
    @JsonProperty("question_history_seq")
    private int questionHistorySeq;
    @JsonProperty("question_history_is_ok")
    private boolean questionHistoryIsOk;
}
