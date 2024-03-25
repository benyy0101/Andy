package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.entity.*;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class SolutionRepository {
    private final JPAQueryFactory jpaQueryFactory;
    private final QCategory qCategory = QCategory.category;
    private final QQuestion qQuestion = QQuestion.question;
    private final QQuestionHistory qQuestionHistory = QQuestionHistory.questionHistory;
    public List<CategoriesResponseDto> findCategoryAll(){
           return jpaQueryFactory.select(Projections.constructor(CategoriesResponseDto.class,
                 qCategory.questionCategorySeq,
                 qCategory.questionCategoryName)).from(qCategory).limit(5)
                   .fetch();
    }


    public List<ProblemDto> findExamByCategoryAll(int category) {
        return jpaQueryFactory.select(Projections.constructor(ProblemDto.class,
                        qQuestion.questionSeq,
                        qQuestion.questionPicture,
                        qQuestion.questionName)).from(qQuestion)
                .where(qQuestion.questionCategorySeq.eq(category))
                .fetch();
    }

    public List<ProblemALLResponseDto> findProblemsALL(int childSeq, String date) {
        YearMonth formatter = YearMonth.parse(date, DateTimeFormatter.ofPattern("yyyy-MM"));
        LocalDateTime startOfMonth = formatter.atDay(1).atStartOfDay();
        LocalDateTime endOfMonth = formatter.plusMonths(1).atDay(1).atStartOfDay().minusSeconds(1);

        return jpaQueryFactory.select(Projections.constructor(ProblemALLResponseDto.class,
                        qQuestionHistory.examMode,
                        qQuestionHistory.questionHistorySeq,
                        qQuestion.questionSeq,
                        qQuestion.questionPicture,
                        qQuestion.questionName,
                        qQuestionHistory.createdAt))
                .from(qQuestionHistory)
                .join(qQuestion).on(qQuestionHistory.questionSeq.eq(qQuestion.questionSeq))
                .where(qQuestionHistory.childSeq.eq(childSeq)
                        .and(qQuestionHistory.createdAt.between(startOfMonth, endOfMonth))
                        .and(qQuestionHistory.questionHistoryIsOk.eq(false)))
                .fetch();
    }


}
