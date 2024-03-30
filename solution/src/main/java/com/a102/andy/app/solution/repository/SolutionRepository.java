package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.entity.*;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
        // 모든 조합 조회
        List<Tuple> combinations = jpaQueryFactory
                .select(qQuestion.questionCategorySeq, qQuestion.questionName)
                .from(qQuestion)
                .where(qQuestion.questionCategorySeq.eq(category))
                .groupBy(qQuestion.questionCategorySeq, qQuestion.questionName)
                .fetch();

        List<ProblemDto> randomQuestions = new ArrayList<>();

        // 각 조합에 대해 한 개의 레코드 선택
        combinations.forEach(combination -> {
            String name = combination.get(qQuestion.questionName);

            List<String> pictures = jpaQueryFactory
                    .select(qQuestion.questionPicture)
                    .from(qQuestion)
                    .where(qQuestion.questionCategorySeq.eq(category)
                            .and(qQuestion.questionName.eq(name)))
                    .fetch();

            int randomIndex = new Random().nextInt(pictures.size());
            String selectedPicture = pictures.get(randomIndex);
            randomQuestions.add(new ProblemDto(category, selectedPicture, name));
        });

        return randomQuestions;
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
