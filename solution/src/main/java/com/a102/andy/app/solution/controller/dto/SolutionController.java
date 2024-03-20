package com.a102.andy.app.solution.controller.dto;

import com.a102.andy.app.solution.service.SolutionService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(name = "/game")
@RequiredArgsConstructor
@RestController
public class SolutionController {
    private final SolutionService solutionService;


    //카테고리 조회
    @GetMapping("/category")
    private ResponseEntity<List<CategoriesResponseDto>> readCategoryAll(){
       return ResponseEntity.ok(solutionService.readCategoryAll());
    }


}
