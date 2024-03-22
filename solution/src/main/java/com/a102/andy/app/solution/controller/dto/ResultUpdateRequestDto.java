package com.a102.andy.app.solution.controller.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResultUpdateRequestDto {
    private int questionHistorySeq;
    private boolean questionHistoryIsOk;
}
