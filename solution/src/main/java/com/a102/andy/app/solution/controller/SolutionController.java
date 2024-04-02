package com.a102.andy.app.solution.controller;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.service.SolutionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequestMapping("/game")
@RequiredArgsConstructor
@RestController
@Slf4j
public class SolutionController {
    private final SolutionService solutionService;


    //카테고리 조회
    @GetMapping("/category")
    public ResponseEntity<List<CategoriesResponseDto>> readCategoryAll(){
       return ResponseEntity.ok(solutionService.readCategoryAll());
    }

    @GetMapping("/{question_category}")
    public ResponseEntity<ProblemsDto> readExamByCategoryAll(@PathVariable("question_category") int category){
        return ResponseEntity.ok(solutionService.readExamByCategoryAll(category));
    }
    @PostMapping(value = "", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<ResultResponseDto> readProblemAnswer(@RequestPart MultipartFile picture, @RequestParam String question_name){
        log.info(question_name);
        return ResponseEntity.ok(solutionService.readProblemAnswer(picture, question_name));
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

    //틀린문제 전체 조회
    @GetMapping("/review/{child_seq}/{date}")
    public ResponseEntity<ProblemALLResponseDto> readProblemsALL
            (@PathVariable(name = "child_seq") int Child_seq,
             @PathVariable(name = "date") String date){
        return ResponseEntity.ok(solutionService.readProblemsALL(Child_seq,date));
    }

    @PatchMapping("/review")
    public ResponseEntity<ResultUpdateResponseDto> updateProblem(@RequestBody ResultUpdateRequestDto resultUpdateRequestDto){
        return ResponseEntity.ok(solutionService.updateProblem(resultUpdateRequestDto));
    }

}
