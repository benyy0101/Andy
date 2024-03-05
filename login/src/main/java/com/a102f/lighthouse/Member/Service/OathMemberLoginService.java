package com.a102f.lighthouse.Member.Service;


import com.a102f.lighthouse.Member.Dto.LoginMemberDto;
import com.a102f.lighthouse.Member.Repository.OathMemberLoginRepository;
import com.a102f.lighthouse.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class OathMemberLoginService {
    private final OathMemberLoginRepository oathMemberLoginRepository;

    private final RedisTemplate<String, String> redisTemplate; // 레디스 템플릿 변수
    public Member login(LoginMemberDto loginMemberDto) {

        Member member =  oathMemberLoginRepository.login(loginMemberDto);
        redisTemplate.opsForValue().set("1234","123 4",30); //Redis 키 입력
        redisTemplate.expire("1234", 30, TimeUnit.SECONDS); // 만료시간 설정

        return member;
    }
}
