package com.a102.andy.app.member.repository;

import com.a102.andy.app.member.entity.Member;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String>, MemberCustomRepository {

    Optional<Member> findByNickname(String nickname);

    boolean existsByNickname(String nickname);

    boolean existsByMemberId(String id);

    @Query("SELECT count(m) FROM Member m WHERE m.memberId = :memberId")
    int countByMemberIdDeletedIncluded(@Param("memberId") String memberId);

    @Query("SELECT count(m) FROM Member m WHERE m.nickname = :nickname")
    int countByNicknameDeletedIncluded(@Param("nickname") String nickname);

}
