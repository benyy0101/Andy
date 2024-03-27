package com.a102.andy.app.solution.repository;

import com.a102.andy.app.solution.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
}
