package com.a102f.lighthouse.app.Member.Repository;

import com.a102f.lighthouse.app.Member.Controller.Dto.LoginMemberDto;
import com.a102f.lighthouse.app.Member.entity.Member;
import com.a102f.lighthouse.app.Member.entity.QMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class OauthMemberLoginRepository {
    private final EntityManager em;
    private QMember qMember = QMember.member;

    private JPAQueryFactory queryFactory;

    @PostConstruct
    public void init() {
        queryFactory = new JPAQueryFactory(em);
    }

    public Member findById(String authenticationCode) {
        return queryFactory.selectFrom(qMember)
                .where(qMember.userId.eq(authenticationCode))
                .fetchOne();
    }

}
