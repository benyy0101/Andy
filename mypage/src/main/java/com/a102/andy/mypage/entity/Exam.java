package com.a102.andy.mypage.entity;

import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exam")
public class Exam extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exam_seq")
    private Integer examSeq;

    @Column(name = "child_seq", nullable = false)
    private Integer childSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_category_seq")
    private Category category;

    @Column(name = "exam_score", nullable = false)
    private Integer examScore;

    @Column(name = "exam_mode", nullable = false, length = 1)
    private String examMode;
}