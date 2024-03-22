package com.a102.andy.mypage.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "category")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Category {

    @Id
    @Column(name = "question_category_seq", nullable = false)
    private Integer questionCategorySeq;

    @Column(name = "question_category_name", nullable = false, length = 50)
    private String questionCategoryName;

}