package com.a102f.lighthouse.error.handler;


import com.a102f.lighthouse.error.errorcode.CommonErrorCode;
import com.a102f.lighthouse.error.errorcode.ErrorCode;
import com.a102f.lighthouse.error.exception.RestApiException;
import com.a102f.lighthouse.error.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    // 커스텀된 에러 리턴을 위한 메서드
    @ExceptionHandler(RestApiException.class)
    public ResponseEntity<Object> handleCustomArgument(RestApiException e) {
        log.warn("RestApiException : {}", e.getMessage());
        log.warn("RestApiException : {}", (Object) e.getStackTrace());
        e.printStackTrace(); // 개발 끝나고 삭제 필요
        ErrorCode errorCode = e.getErrorCode();
        return handleExceptionInternal(errorCode, e.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgument(IllegalArgumentException e) {
        log.warn("handleIllegalArgument : {}", e.getMessage());
        log.warn("handleIllegalArgument : {}", (Object) e.getStackTrace());
        ErrorCode errorCode = CommonErrorCode.INVALID_PARAMETER;
        return handleExceptionInternal(errorCode, e.getMessage());
    }

    // Validation에 의한 MethodArgumentNotValidException은 ResponseEntityExceptionHandler에서 처리하나 여기에 메시지를 넣어줄 수 있도록 커스터마이징하자
    @Override
    public ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException e, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        log.warn("handleIllegalArgument :{}", e.getMessage());
        log.warn("handleIllegalArgument :{}", (Object) e.getStackTrace());
        ErrorCode errorCode = CommonErrorCode.INVALID_PARAMETER;
        return handleExceptionInternal(e, errorCode);
    }

    // 이외 에러들은 internal error로 처리한다 (NPE등)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAllException(Exception e) {
        log.warn("handleAllException : {}", e.getMessage());
        log.warn("handleAllException : {}", (Object) e.getStackTrace());
        e.printStackTrace(); // 개발 끝나고 삭제 필요

        ErrorCode errorCode = CommonErrorCode.INTERNAL_SERVER_ERROR;
        return handleExceptionInternal(errorCode, e.getMessage());
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        log.warn("handleAllException : {}", e.getMessage());
        log.warn("handleAllException : {}", (Object) e.getStackTrace());
        e.printStackTrace(); // 개발 끝나고 삭제 필요

        ErrorCode errorCode = CommonErrorCode.INTERNAL_SERVER_ERROR;
        return handleExceptionInternal(errorCode, "data 제한조건에 위반되는 요청입니다");
    }


    private ResponseEntity<Object> handleExceptionInternal(ErrorCode errorCode, String message) {
        return ResponseEntity.status(errorCode.getHttpStatus())
                .body(ErrorResponse.builder()
                        .code(errorCode.name())
                        .message(message)
                        .build());
    }

    // @Valid에 의한 validation 발생 시 에러가 발생한 필드 정보를 담은 Response 반환
    private ResponseEntity<Object> handleExceptionInternal(BindException e, ErrorCode errorCode) {
        return ResponseEntity.status(errorCode.getHttpStatus())
                .body(makeErrorResponse(e, errorCode));
    }

    // @Valid에 의한 validation 발생 시 에러가 발생한 필드 정보를 담은 Response 반환
    private Object makeErrorResponse(BindException e, ErrorCode errorCode) {
        List<ErrorResponse.ValidationError> validationErrorList = e.getBindingResult()
                .getFieldErrors()
                .stream().map(ErrorResponse.ValidationError::of)
                .collect(Collectors.toList());

        return ErrorResponse.builder()
                .code(errorCode.name())
                .message(errorCode.getMessage())
                .errors(validationErrorList)
                .build();
    }
}
