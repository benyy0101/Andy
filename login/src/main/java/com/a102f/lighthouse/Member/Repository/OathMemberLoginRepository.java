package com.a102f.lighthouse.Member.Repository;

import com.a102f.lighthouse.Member.Dto.LoginMemberDto;
import com.a102f.lighthouse.domain.Member;
import com.a102f.lighthouse.domain.QMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class OathMemberLoginRepository {
    private final EntityManager em;
    private QMember qMember = QMember.member;

    private JPAQueryFactory queryFactory;

    @PostConstruct
    public void init() {
        queryFactory = new JPAQueryFactory(em);
    }
    public Member login(LoginMemberDto loginMemberDto) {
        return queryFactory.selectFrom(qMember)
                .where(qMember.memberId.eq(loginMemberDto.getMember_id()).and(qMember.memberPassword.eq(loginMemberDto.getMember_password())))
                .fetchOne();

    }
}
