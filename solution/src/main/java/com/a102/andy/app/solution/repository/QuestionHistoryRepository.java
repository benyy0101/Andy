package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.entity.QuestionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionHistoryRepository extends JpaRepository<QuestionHistory, Long> {
}