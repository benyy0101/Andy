package com.a102.andy.app.solution.controller;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.service.SolutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RequestMapping("/game")
@RequiredArgsConstructor
@RestController
public class SolutionController {
    private final SolutionService solutionService;


    //카테고리 조회
    @GetMapping("/category")
    private ResponseEntity<List<CategoriesResponseDto>> readCategoryAll(){
       return ResponseEntity.ok(solutionService.readCategoryAll());
    }

    @GetMapping("/{question_category}")
    private ResponseEntity<List<ProblemResponseDto>> readExamByCategoryAll(@RequestParam(name = "question_category") int category){
        return ResponseEntity.ok(solutionService.readExamByCategoryAll(category));
    }
    @PostMapping
    private ResponseEntity<ResultResponseDto> readProblemAnswer(@RequestBody ResultRequestDto resultRequestDto){
        return ResponseEntity.ok(solutionService.readProblemAnswer(resultRequestDto));
    }

    @PostMapping("/result")
    private ResponseEntity<Void> createExamResult(@RequestBody GameResultRequestDto gameResultRequestDto){
        try {
            solutionService.createExamResult(gameResultRequestDto);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @GetMapping("/review/{child_seq}/{date}")
    private ResponseEntity<List<ProblemALLResponseDto>> readProblemsALL
            (@RequestParam(name = "child_seq") int Child_seq,
             @RequestParam(name = "date") String date){
        return ResponseEntity.ok(solutionService.readProblemsALL(Child_seq,date));
    }

    @PatchMapping("/review")
    private ResponseEntity<ResultUpdateResponseDto> readProblemsALL(@RequestBody ResultUpdateRequestDto resultUpdateRequestDto){
        return ResponseEntity.ok(solutionService.updateProblem(resultUpdateRequestDto));
    }



}
