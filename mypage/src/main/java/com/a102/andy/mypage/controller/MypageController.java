package com.a102.andy.mypage.controller;

import com.a102.andy.mypage.controller.dto.MypageHistoryDayRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryDayResponseDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthRequestDto;
import com.a102.andy.mypage.controller.dto.MypageHistoryMonthResponseDto;
import com.a102.andy.mypage.service.MypageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
@Slf4j
public class MypageController {
    private final MypageService mypageService;

    @PostMapping("/month")
    public ResponseEntity<MypageHistoryMonthResponseDto> readMonthHistory(@RequestBody MypageHistoryMonthRequestDto req) {
        return ResponseEntity.ok(mypageService.readMonthHistory(req));
    }

    @PostMapping("/day")
    public ResponseEntity<MypageHistoryDayResponseDto> readDayHistory(@RequestBody MypageHistoryDayRequestDto req) {
        return ResponseEntity.ok(mypageService.readDayHistory(req));
    }
}
