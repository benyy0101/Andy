package com.a102.andy.app.solution.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class CategoriesResponseDto {
    private int questionCategorySeq;
    private String questionCategoryName;
}
