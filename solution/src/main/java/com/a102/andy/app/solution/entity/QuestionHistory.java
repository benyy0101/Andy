package com.a102.andy.app.solution.entity;

import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "question_history")
@Getter
public class QuestionHistory extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_history_seq")
    private int questionHistorySeq;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @Column(name = "exam_seq",nullable = false)
//    private int examSeq;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @Column(name = "question_seq",nullable = false)
//    private int questionSeq;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @Column(name = "child_seq",nullable = false)
//    private int childSeq;

    @Column(name = "question_history_is_ok",nullable = false)
    private boolean questionHistoryIsOk;
}
