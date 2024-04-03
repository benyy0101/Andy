package com.a102.andy.app.solution.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProblemDto {
    @JsonProperty("problem")
    private ProblemResponseDto problemResponseDto;

    public ProblemDto(int seq, String name, String picture) {
        this.problemResponseDto = new ProblemResponseDto(seq,name,picture);
    }
}
