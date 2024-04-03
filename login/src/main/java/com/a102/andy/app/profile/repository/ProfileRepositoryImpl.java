package com.a102.andy.app.profile.repository;

import com.a102.andy.app.profile.controller.dto.ProfileUpdateRequestDto;
import com.a102.andy.app.profile.entity.Profile;
import com.a102.andy.app.profile.entity.QProfile;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class ProfileRepositoryImpl implements CustomProfileRepository{
    private final JPAQueryFactory queryFactory;
    @Override
    public List<Profile> findByMemberId(String memberId) {
        QProfile profile = QProfile.profile;
        return queryFactory
                .selectFrom(profile)
                .where(profile.memberId.eq(memberId)
                        .and(profile.isDeleted.eq(false)))
                .fetch();
    }
}
