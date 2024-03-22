package com.a102.andy.app.solution.entity;

import com.a102.andy.app.solution.controller.dto.ResultUpdateRequestDto;
import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "question_history")
@Getter
@Builder
public class QuestionHistory extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_history_seq")
    private int questionHistorySeq;

//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "exam_seq",nullable = false)
    private int examSeq;
//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "question_seq",nullable = false)
    private int questionSeq;
//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "child_seq",nullable = false)
    private int childSeq;

    @Column(name = "exam_mode", nullable = false)
    private String examMode;

    @Column(name = "question_history_is_ok",nullable = false)
    private boolean questionHistoryIsOk;


    public void update(ResultUpdateRequestDto req) {

        this.questionHistoryIsOk = req.isQuestionHistoryIsOk();
    }

}
