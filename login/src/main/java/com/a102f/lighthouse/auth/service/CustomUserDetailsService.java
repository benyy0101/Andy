package com.a102f.lighthouse.auth.service;

import com.a102f.lighthouse.app.member.entity.Member;
import com.a102f.lighthouse.app.member.repository.MemberRepository;
import com.a102f.lighthouse.error.errorcode.CustomErrorCode;
import com.a102f.lighthouse.error.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
        return memberRepository.findById(memberId)
                .map(this::createUserDetails)
                .orElseThrow(() -> new RestApiException(CustomErrorCode.NO_MEMBER));
    }

    // 멤버 정보를 UserDetail 객체로 변경하여 return
    private UserDetails createUserDetails(Member member) {
        return User.builder()
                .username(member.getMemberId())
                .password(member.getPassword())
                .roles(member.getRoles().toArray(new String[0]))
                .build();
    }
}
