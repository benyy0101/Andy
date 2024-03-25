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
    @JsonProperty("child_seq")
    private int childSeq;
    @JsonProperty("question_category_seq")
    private int questionCategorySeq;
    @JsonProperty("mode")
    private String examMode;
    @JsonProperty("questions")
    private List<AnswerResponseDto> answerResponseDtos;

}
