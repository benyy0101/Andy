package com.a102.andy.app.solution.service;

import com.a102.andy.app.solution.controller.dto.CategoriesResponseDto;
import com.a102.andy.app.solution.controller.dto.ProblemResponseDto;
import com.a102.andy.app.solution.entity.Category;
import com.a102.andy.app.solution.repository.SolutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SolutionService {
    private final SolutionRepository solutionRepository;

    public List<CategoriesResponseDto> readCategoryAll(){
        return solutionRepository.findCategoryAll();
    }

}
