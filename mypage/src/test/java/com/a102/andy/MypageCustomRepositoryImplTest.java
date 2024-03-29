package com.a102.andy;

import com.a102.andy.config.QuerydslConfig;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayResponseDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.entity.Category;
import com.a102.andy.mypage.entity.Exam;
import com.a102.andy.mypage.repository.MypageCustomRepository;
import com.a102.andy.mypage.repository.MypageCustomRepositoryImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

    private int year, month, day;

    @BeforeEach
    public void setUp() {
        year = LocalDateTime.now().getYear();
        month = LocalDateTime.now().getMonthValue();
        day = LocalDateTime.now().getDayOfMonth();

        // Category 인스턴스 생성
        Category testCategory = new Category(2, "furniture");
        entityManager.persist(testCategory);

        // Exam 인스턴스 생성 및 초기화
        Exam exam = new Exam(2, 1, testCategory, 100, "A");
        entityManager.merge(exam);

        entityManager.flush();
    }

    @Test
    public void testReadMonthHistory() {
        // 테스트 실행
        Optional<MypageHistoryMonthResponseDto> result = mypageCustomRepository.readMonthHistory(new MypageHistoryMonthRequestDto(1, year, month));
        // 검증
        assertTrue(result.isPresent());
        assertTrue(result.get().getExams().contains(LocalDateTime.now().getDayOfMonth()));
    }

    @Test
    public void testReadDayHistory() {
        // 테스트 실행
        Optional<MypageHistoryDayResponseDto> result = mypageCustomRepository.readDayHistory(
                new MypageHistoryDayRequestDto(1, year, month, day));
        // 검증
        assertTrue(result.isPresent());
        assertEquals(result.get().getExams().get(0).getQuestionCategoryName(), new MypageHistoryDayResponseDto.ExamDetail(100, "furniture", "A").getQuestionCategoryName());
        assertEquals(result.get().getExams().get(0).getExamMode(), new MypageHistoryDayResponseDto.ExamDetail(100, "furniture", "A").getExamMode());
        assertEquals(result.get().getExams().get(0).getExamScore(), new MypageHistoryDayResponseDto.ExamDetail(100, "furniture", "A").getExamScore());
    }
}
