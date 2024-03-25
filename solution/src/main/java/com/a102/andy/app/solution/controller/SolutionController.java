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
    public ResponseEntity<List<CategoriesResponseDto>> readCategoryAll(){
       return ResponseEntity.ok(solutionService.readCategoryAll());
    }

    @GetMapping("/{question_category}")
    public ResponseEntity<List<ProblemResponseDto>> readExamByCategoryAll(@PathVariable("question_category") int category){
        return ResponseEntity.ok(solutionService.readExamByCategoryAll(category));
    }
    @PostMapping
    public ResponseEntity<ResultResponseDto> readProblemAnswer(@RequestBody ResultRequestDto resultRequestDto){
        return ResponseEntity.ok(solutionService.readProblemAnswer(resultRequestDto));
    }

    @PostMapping("/result")
    public ResponseEntity<Void> createExamResult(@RequestBody GameResultRequestDto gameResultRequestDto){
        try {
            solutionService.createExamResult(gameResultRequestDto);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @GetMapping("/review/{child_seq}/{date}")
    public ResponseEntity<List<ProblemALLResponseDto>> readProblemsALL
            (@PathVariable(name = "child_seq") int Child_seq,
             @PathVariable(name = "date") String date){
        return ResponseEntity.ok(solutionService.readProblemsALL(Child_seq,date));
    }

    @PatchMapping("/review")
    public ResponseEntity<ResultUpdateResponseDto> updateProblem(@RequestBody ResultUpdateRequestDto resultUpdateRequestDto){
        return ResponseEntity.ok(solutionService.updateProblem(resultUpdateRequestDto));
    }

}