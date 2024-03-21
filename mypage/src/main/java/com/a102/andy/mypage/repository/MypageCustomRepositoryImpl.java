package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import static com.a102.andy.mypage.entity.QExam.exam;
import static com.querydsl.core.group.GroupBy.groupBy;
import static com.querydsl.core.types.Projections.map;
import static com.querydsl.core.types.dsl.Expressions.set;

@Repository
public class MypageCustomRepositoryImpl implements MypageCustomRepository {
    private final JPAQueryFactory jpaQueryFactory;

    public MypageCustomRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
    @Override
    public Optional<MypageHistoryMonthResponseDto> readMonthHistory(int childSeq, int year, int month) {
        Set<Integer> res = new HashSet<>(jpaQueryFactory
                .select(exam.createdAt.dayOfMonth())
                .from(exam)
                .where(exam.childSeq.eq(childSeq)
                        .and(exam.createdAt.year().eq(year))
                        .and(exam.createdAt.month().eq(month)))
                .fetch());

        return Optional.of(new MypageHistoryMonthResponseDto(res));
    }
}
