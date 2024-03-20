package com.a102.andy.mypage.repository;

import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.a102.andy.mypage.entity.QQuestionHistory.questionHistory;
@RequiredArgsConstructor
@Repository
public class MypageCustomRepositoryImpl implements MypageCustomRepository {
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<MypageHistoryMonthResponseDto> readMonthHistory(Integer childSeq, Integer year, Integer month) {
        MypageHistoryMonthResponseDto res = jpaQueryFactory
                .select(Projections.constructor(
                        MypageHistoryMonthResponseDto.class

                ))
                .from(questionHistory)
                .where(questionHistory.childSeq.eq(childSeq) && questionHistory.createdAt.year().eq(year) && questionHistory.createdAt.month().eq(month))
                .fetch();
        return res;
    }
}
