package com.a102.andy.app.solution.entity;

import com.a102.andy.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "question")
@Getter
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int question_seq;

    @Column(name = "question_category_seq", nullable = false)
    private int questionCategotySeq;

    @Column(name = "question_picture", nullable = false)
    private String questionPicture;

    @Column(name = "question_name", nullable = false)
    private String questionName;
}
