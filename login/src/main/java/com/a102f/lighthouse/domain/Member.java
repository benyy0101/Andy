package com.a102f.lighthouse.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_seq")
    private Long memberSeq;
    @Column(name = "member_id")
    private String memberId;
    @Column(name = "member_password")
    private String memberPassword;


}
