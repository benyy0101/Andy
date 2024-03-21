package com.a102.andy;

import com.a102.andy.config.QuerydslConfig;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.entity.Category;
import com.a102.andy.mypage.entity.Exam;
import com.a102.andy.mypage.repository.MypageCustomRepository;
import com.a102.andy.mypage.repository.MypageCustomRepositoryImpl;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
@Import({MypageCustomRepositoryImpl.class, QuerydslConfig.class})
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class MypageCustomRepositoryImplTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    @Qualifier("mypageCustomRepositoryImpl")
    private MypageCustomRepository mypageCustomRepository;

    @BeforeEach
    public void setUp() {
        // Category 인스턴스 생성
        Category testCategory = new Category(1, "hi");
        entityManager.persist(testCategory);

        // Exam 인스턴스 생성 및 초기화
        Exam exam = new Exam(1, 1, testCategory, 10, "A");
        entityManager.merge(exam);
        entityManager.flush();
    }

    @Test
    public void testReadMonthHistory() {
        // 테스트 실행
        Optional<MypageHistoryMonthResponseDto> result = mypageCustomRepository.readMonthHistory(1, 2024, 3);

        // 검증
        assertTrue(result.isPresent());
        assertTrue(result.get().getExams().contains(21));
    }
}
