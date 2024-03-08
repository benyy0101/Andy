package com.a102f.lighthouse.app.member.repository;

import com.a102f.lighthouse.app.member.controller.dto.MemberDetailResponseDto;
import com.a102f.lighthouse.app.member.controller.dto.MemberDuplicationRequestDto;
import com.a102f.lighthouse.app.member.controller.dto.MemberSimpleResponseDto;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.a102f.lighthouse.app.member.entity.QMember.member;

@RequiredArgsConstructor
@Repository
public class MemberCustomRepositoryImpl implements MemberCustomRepository {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Optional<MemberDetailResponseDto> getMemberDetail(String memberId) {
        MemberDetailResponseDto res = jpaQueryFactory
                .select(Projections.constructor(
                        MemberDetailResponseDto.class,
                        member.memberId,
                        member.nickname,
                        member.profileImage
                ))
                .from(member)
                .where(member.memberId.eq(memberId))
                .fetchOne();
        if (res == null) return Optional.empty();

        return Optional.of(res);
    }

    @Override
    public List<MemberSimpleResponseDto> getCurrentMembers(Set<String> currentMemberIdSet) {
        return jpaQueryFactory.select(Projections.constructor(
                MemberSimpleResponseDto.class,
                member.memberId,
                member.nickname,
                member.profileImage
                )).from(member)
                .where(member.memberId.in(currentMemberIdSet))
                .limit(currentMemberIdSet.size())
                .fetch();
    }

    private BooleanBuilder makeBooleanBuilder(MemberDuplicationRequestDto req) {
        BooleanBuilder builder = new BooleanBuilder();

        if (req.getMemberId() != null) {
            builder.or(member.memberId.eq(req.getMemberId()));
        }
        if (req.getNickname() != null) {
            builder.or(member.nickname.eq(req.getNickname()));
        }

        return builder;
    }

}
