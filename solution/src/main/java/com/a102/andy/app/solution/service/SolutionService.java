package com.a102.andy.app.solution.service;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.entity.Category;
import com.a102.andy.app.solution.entity.Exam;
import com.a102.andy.app.solution.entity.QuestionHistory;
import com.a102.andy.app.solution.repository.CategoryRepository;
import com.a102.andy.app.solution.repository.ExamRepository;
import com.a102.andy.app.solution.repository.QuestionHistoryRepository;
import com.a102.andy.app.solution.repository.SolutionRepository;
import com.a102.andy.error.errorcode.CustomErrorCode;
import com.a102.andy.error.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.lang.module.ResolutionException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
public class SolutionService {
    private final SolutionRepository solutionRepository;
    private final ExamRepository examRepository;
    private final QuestionHistoryRepository questionHistoryRepository;
    private final CategoryRepository categoryRepository;
    public List<CategoriesResponseDto> readCategoryAll(){
        return solutionRepository.findCategoryAll();
    }

    public List<ProblemResponseDto> readExamByCategoryAll(int category){return solutionRepository.findExamByCategoryAll(category);}

    public ResultResponseDto readProblemAnswer(ResultRequestDto resultRequestDto) {
        // RestTemplate 생성
        RestTemplate restTemplate = new RestTemplate();

        // 요청 매개변수 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<ResultRequestDto> request = new HttpEntity<>(resultRequestDto, headers);

        // HTTP 요청 및 응답 처리
        ResultResponseDto responseDto = restTemplate.exchange("https://j10a102.p.ssafy.io:8000/Detection", HttpMethod.POST, request, ResultResponseDto.class).getBody();
        return responseDto;
    }

    public void createExamResult(GameResultRequestDto gameResultRequestDto) {
        Exam exam = Exam.builder()
                .childSeq(gameResultRequestDto.getChild_seq())
                .questionCategorySeq(gameResultRequestDto.getQuestion_category_seq())
                .examScore(calExamScore(gameResultRequestDto))
                .examMode(gameResultRequestDto.getMode())
                .build();
        exam = examRepository.save(exam);

        List<QuestionHistory> questionHistories = new ArrayList<>();


        for(AnswerResponseDto answerResponseDto : gameResultRequestDto.getAnswerResponseDtos()){
            QuestionHistory questionHistory = QuestionHistory.builder()
                    .examSeq(exam.getExamSeq())
                    .examMode(gameResultRequestDto.getMode())
                    .questionSeq(answerResponseDto.getAnswerSeq())
                    .childSeq(gameResultRequestDto.getChild_seq())
                    .questionHistoryIsOk(answerResponseDto.isAnswerIsOk())
                    .build();
            questionHistories.add(questionHistory);
        }
        // questionHistories 리스트에 QuestionHistory 객체들을 추가하는 로직

        questionHistoryRepository.saveAll(questionHistories);

    }

    private int calExamScore(GameResultRequestDto req) {
        return (int) req.getAnswerResponseDtos().stream()
                .filter(AnswerResponseDto::isAnswerIsOk)
                .count();
    }

    public List<ProblemALLResponseDto> readProblemsALL(int Child_seq, String date) {
        return solutionRepository.findProblemsALL(Child_seq, date);

    }

    public ResultUpdateResponseDto updateProblem(ResultUpdateRequestDto resultUpdateRequestDto) {
        QuestionHistory questionHistory =questionHistoryRepository.
                findById(Long.valueOf(resultUpdateRequestDto.getQuestionHistorySeq())).orElseThrow(() -> new RestApiException(CustomErrorCode.NO_MEMBER));;

        questionHistory.update(resultUpdateRequestDto);
        ResultUpdateResponseDto resultUpdateResponseDto = new ResultUpdateResponseDto().builder()
                .question_history_seq(questionHistory.getQuestionSeq())
                .build();
        return resultUpdateResponseDto;
    }
}
