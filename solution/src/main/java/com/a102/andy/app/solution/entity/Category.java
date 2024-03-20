package com.a102.andy.app.solution.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "category")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_category_seq")
    private byte questionCategorySeq;

    @Column(name = "question_category_name")
    private String questionCategoryName;
}
