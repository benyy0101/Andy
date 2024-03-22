package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.controller.dto.MypageHistoryDayRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayResponseDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Ops;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.a102.andy.mypage.entity.QCategory.category;
import static com.a102.andy.mypage.entity.QExam.exam;

@Repository
@Slf4j
public class MypageCustomRepositoryImpl implements MypageCustomRepository {
    private final JPAQueryFactory jpaQueryFactory;

    public MypageCustomRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
    @Override
    public Optional<MypageHistoryMonthResponseDto> readMonthHistory(MypageHistoryMonthRequestDto req) {
        Set<Integer> res = new HashSet<>(jpaQueryFactory
                .select(exam.createdAt.dayOfMonth())
                .from(exam)
                .where(exam.childSeq.eq(req.getChildSeq())
                        .and(exam.createdAt.year().eq(req.getYear()))
                        .and(exam.createdAt.month().eq(req.getMonth())))
                .fetch());

        return Optional.of(new MypageHistoryMonthResponseDto(res));
    }

    @Override
    public Optional<MypageHistoryDayResponseDto> readDayHistory(MypageHistoryDayRequestDto req) {
        List<Tuple> results = jpaQueryFactory
                .select(exam.examScore.as("examScore"), exam.category.questionCategoryName.as("questionCategoryName"), exam.examMode.as("examMode"))
                .from(exam)
                .join(exam.category, category)
                .where(exam.childSeq.eq(req.getChildSeq())
                        .and(Expressions.dateTimeOperation(Integer.class, Ops.DateTimeOps.YEAR, exam.createdAt).eq(req.getYear()))
                        .and(Expressions.dateTimeOperation(Integer.class, Ops.DateTimeOps.MONTH, exam.createdAt).eq(req.getMonth()))
                        .and(Expressions.dateTimeOperation(Integer.class, Ops.DateTimeOps.DAY_OF_MONTH, exam.createdAt).eq(req.getDay())))
                .fetch();

        // Tuple 결과를 MypageHistoryDayResponseDto.ExamDetail 리스트로 변환
        List<MypageHistoryDayResponseDto.ExamDetail> examDetails = results.stream()
                .map(MypageHistoryDayResponseDto.ExamDetail::new)
                .toList();

        // 최종 MypageHistoryDayResponseDto 객체 생성
        MypageHistoryDayResponseDto res = MypageHistoryDayResponseDto.builder()
                .exams(examDetails)
                // paginationObject 채우는 코드는 생략 (필요하다면 추가)
                .build();

        return Optional.of(res);
    }
}
