package com.a102.andy.app.member.entity;

import com.a102.andy.app.member.controller.dto.MemberUpdateRequestDto;
import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.management.relation.Role;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static lombok.AccessLevel.PROTECTED;

/**
 * 미완성
 */

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
@AllArgsConstructor
@Builder
//@SQLRestriction("is_deleted = 0")
@Table(name = "parent")
public class Member extends BaseEntity implements UserDetails {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="parent_kakao_seq", updatable = false, unique = true, nullable = false)
    private String memberSeq;

    @Column(name="parent_kakao_id", updatable = false, unique = true, nullable = false)
    private String memberId;

    //임시
    @Column(name = "parent_kakao_email",nullable = false)
    private String password;

    @Column(name = "parent_kakao_name",nullable = false)
    private String nickname;

//    @Builder.Default
//    @ElementCollection(fetch = FetchType.EAGER)
//    private List<String> roles = new ArrayList<>();
    @Builder.Default
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "parent_role", joinColumns = @JoinColumn(name = "parent_kakao_id"))
    private List<String> roles = new ArrayList<>();
    public void updateMember(MemberUpdateRequestDto dto){
        if (dto.getPassword() != null) this.password = dto.getPassword();
        if (dto.getNickname() != null) this.nickname = dto.getNickname();
    }

    public void delete(){
        deleteSoftly();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return this.memberId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
