package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.controller.dto.CategoriesResponseDto;
import com.a102.andy.app.solution.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam,Long> {


}
