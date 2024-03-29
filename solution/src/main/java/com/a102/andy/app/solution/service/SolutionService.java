package com.a102.andy.app.solution.service;

import com.a102.andy.app.solution.controller.dto.*;
import com.a102.andy.app.solution.entity.Exam;
import com.a102.andy.app.solution.entity.QuestionHistory;
import com.a102.andy.app.solution.repository.CategoryRepository;
import com.a102.andy.app.solution.repository.ExamRepository;
import com.a102.andy.app.solution.repository.QuestionHistoryRepository;
import com.a102.andy.app.solution.repository.SolutionRepository;
import com.a102.andy.error.errorcode.CommonErrorCode;
import com.a102.andy.error.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

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

    public ProblemsDto readExamByCategoryAll(int category){
        List<ProblemDto> problemResponseDtos = solutionRepository.findExamByCategoryAll(category);
        ProblemsDto problemsDto = ProblemsDto.builder()
                .problem(problemResponseDtos)
                .build();
        return problemsDto;
    }

    public ResultResponseDto readProblemAnswer(MultipartFile multipartFile, String answer) {
        RestTemplate restTemplate = new RestTemplate();

        // 요청 매개변수 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

        try {
            // ByteArrayResource를 사용하여 MultipartFile을 전송 가능한 형태로 변환
            ByteArrayResource byteArrayResource = new ByteArrayResource(multipartFile.getBytes()) {
                @Override
                public String getFilename() {
                    return multipartFile.getOriginalFilename(); // 파일 이름 설정이 필요함
                }
            };
            body.add("picture", new HttpEntity<>(byteArrayResource, headers));
        } catch (IOException e) {
            // 파일 처리 중 예외 발생 시 처리
            e.printStackTrace();
            return null; // 적절한 예외 처리 또는 오류 응답 반환 필요
        }

        body.add("question_name", answer);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        // HTTP 요청 및 응답 처리
        ResponseEntity<ResultResponseDto> responseEntity = restTemplate.exchange(
                "https://j10a102.p.ssafy.io/Detection",
                HttpMethod.POST,
                requestEntity,
                ResultResponseDto.class
        );

        // 응답 본문을 가져와서 처리
        return responseEntity.getBody();
    }


    public void createExamResult(GameResultRequestDto gameResultRequestDto) {
        Exam exam = Exam.builder()
                .childSeq(gameResultRequestDto.getChildSeq())
                .questionCategorySeq(gameResultRequestDto.getQuestionCategorySeq())
                .examScore(calExamScore(gameResultRequestDto))
                .examMode(gameResultRequestDto.getExamMode())
                .build();
        exam = examRepository.save(exam);

        List<QuestionHistory> questionHistories = new ArrayList<>();


        for(AnswerResponseDto answerResponseDto : gameResultRequestDto.getAnswerResponseDtos()){
            QuestionHistory questionHistory = QuestionHistory.builder()
                    .examSeq(exam.getExamSeq())
                    .examMode(gameResultRequestDto.getExamMode())
                    .questionSeq(answerResponseDto.getAnswerSeq())
                    .childSeq(gameResultRequestDto.getChildSeq())
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

    @Transactional
    public ResultUpdateResponseDto updateProblem(ResultUpdateRequestDto resultUpdateRequestDto) {
        QuestionHistory questionHistory = questionHistoryRepository.
                findById(resultUpdateRequestDto.getQuestionHistorySeq()).orElseThrow(() -> new RestApiException(CommonErrorCode.RESOURCE_NOT_FOUND));;

        questionHistory.update(resultUpdateRequestDto);

        return new ResultUpdateResponseDto(questionHistory.getQuestionHistorySeq());
    }
}
