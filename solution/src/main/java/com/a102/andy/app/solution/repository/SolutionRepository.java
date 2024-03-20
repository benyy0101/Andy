package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.controller.dto.CategoriesResponseDto;
import com.a102.andy.app.solution.controller.dto.ProblemResponseDto;
import com.a102.andy.app.solution.entity.Category;
import com.a102.andy.app.solution.entity.QCategory;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class SolutionRepository {
    private final JPAQueryFactory jpaQueryFactory;
    private final QCategory qCategory = QCategory.category;
    public List<CategoriesResponseDto> findCategoryAll(){
           return jpaQueryFactory.select(Projections.constructor(CategoriesResponseDto.class,
                 qCategory.questionCategorySeq,
                 qCategory.questionCategoryName)).from(qCategory)
                   .fetch();
    }




}
