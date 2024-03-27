package com.a102.andy.app.solution.entity;

import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "exam")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
public class Exam extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exam_seq", nullable = false)
    private int examSeq;
    @Column(name = "child_seq", nullable = false)
    private int childSeq;
    @Column(name = "question_category_seq", nullable = false)
    private int questionCategorySeq;
    @Column(name = "exam_score", nullable = false)
    private int examScore;
    @Column(name = "exam_mode", nullable = false)
    private String examMode;

}
