package com.a102.andy;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

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
        when(mypageRepository.readMonthHistory(requestDto.getChildSeq(), requestDto.getYear(), requestDto.getMonth()))
                .thenReturn(Optional.of(expectedResponse));

        // 테스트 대상 메소드 실행
        MypageHistoryMonthResponseDto result = mypageService.readMonthHistory(requestDto);

        // 검증
        assertEquals(expectedResponse, result);
    }
}
