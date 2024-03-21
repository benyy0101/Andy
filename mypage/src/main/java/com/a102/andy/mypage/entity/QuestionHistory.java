package com.a102.andy.mypage.entity;

import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@Entity
@AllArgsConstructor
@Table(name = "question_history")
public class QuestionHistory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_history_seq", nullable = false)
    private Integer questionHistorySeq;

    @Column(name = "exam_seq", nullable = false)
    private Integer examSeq;

    @Column(name = "question_seq", nullable = false)
    private Integer questionSeq;

    @Column(name = "child_seq", nullable = false)
    private Integer childSeq;

    @Column(name = "question_history_is_ok", nullable = false)
    private Boolean questionHistoryIsOk = false;

}