package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@Setter
@ToString
public class GameResultRequestDto {
    private int child_seq;
    private int question_category_seq;
    private String mode;
//    private int exam_score;
    @JsonProperty("questions")
    private List<AnswerResponseDto> answerResponseDtos;

}
