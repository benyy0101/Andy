package com.a102.andy;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.a102.andy.mypage.controller.dto.MypageHistoryDayRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayResponseDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.repository.MypageCustomRepository;
import com.a102.andy.mypage.repository.MypageCustomRepositoryImpl;
import com.a102.andy.mypage.repository.MypageRepository;
import com.a102.andy.mypage.service.MypageService;
import com.querydsl.core.types.EntityPath;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

@ExtendWith(MockitoExtension.class)
public class MypageServiceTest {

    @Mock
    private MypageRepository mypageRepository;

    @InjectMocks
    private MypageService mypageService;

    @Test
    public void testReadMonthHistoryExists() {
        // 입력 값 준비
        MypageHistoryMonthRequestDto requestDto = new MypageHistoryMonthRequestDto(1, 2024, 3);

        // 예상되는 반환 값
        Set<Integer> days = new HashSet<>(Arrays.asList(1, 2, 3));
        MypageHistoryMonthResponseDto expectedResponse = new MypageHistoryMonthResponseDto(days);

        // Mock 설정
        when(mypageRepository.readMonthHistory(requestDto))
                .thenReturn(Optional.of(expectedResponse));

        // 테스트 대상 메소드 실행
        MypageHistoryMonthResponseDto result = mypageService.readMonthHistory(requestDto);

        // 검증
        assertEquals(expectedResponse, result);
    }

    @Test
    public void testReadDayHistory() {
        // 입력 값 준비
        MypageHistoryDayRequestDto requestDto = new MypageHistoryDayRequestDto(1, 2024, 3, 22);

        // 예상되는 반환 값 준비
        List<MypageHistoryDayResponseDto.ExamDetail> examDetails = new ArrayList<>();
        examDetails.add(new MypageHistoryDayResponseDto.ExamDetail(10, "수학", "A")); // 직접 생성자를 수정하거나, 적절한 설정 메소드를 사용해야 함

        MypageHistoryDayResponseDto expectedResponse = MypageHistoryDayResponseDto.builder()
                .exams(examDetails)
                .build();

        // Mock 설정
        when(mypageRepository.readDayHistory(requestDto))
                .thenReturn(Optional.of(expectedResponse));

        // 테스트 대상 메소드 실행
        MypageHistoryDayResponseDto result = mypageService.readDayHistory(requestDto);

        // 검증
        assertNotNull(result);
        assertEquals(expectedResponse, result);

        // Mockito를 사용한 상호 작용 검증
        verify(mypageRepository, times(1)).readDayHistory(requestDto);
    }
}
