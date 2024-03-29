package com.a102.andy.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
public class AccessTokenAspect {
    @Around("execution(* com.a102.andy.mypage.controller..*.*(..))")
    public Object aroundControllerMethods(ProceedingJoinPoint joinPoint) throws Throwable {
        // 원래의 메서드를 실행합니다.
        Object proceed = joinPoint.proceed();

        // 현재 HTTP 요청과 응답 객체를 가져옵니다.
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();

        if (request != null) {
            boolean isAccessTokenUpdated = checkAccessTokenUpdate(request);

            if (isAccessTokenUpdated && proceed instanceof ResponseEntity) {
                // 업데이트된 액세스 토큰을 헤더에 추가하고 새로운 ResponseEntity를 반환합니다.
                ResponseEntity<?> originalResponse = (ResponseEntity<?>) proceed;
                return ResponseEntity.status(HttpServletResponse.SC_RESET_CONTENT)
                        .headers(originalResponse.getHeaders())
                        .header("X-Access-Token-Updated", "true")
                        .header("AccessToken-Updated", request.getAttribute("newAccessToken").toString())
                        .body(originalResponse.getBody());
            }
        }

        // 액세스 토큰이 업데이트되지 않았거나, 반환 타입이 ResponseEntity가 아닌 경우 원래의 반환 값을 그대로 반환합니다.
        return proceed;
    }

    private boolean checkAccessTokenUpdate(HttpServletRequest request) {
        // 요청 객체에서 newAccessToken 속성 값을 가져옵니다.
        String newAccessToken = (String) request.getAttribute("newAccessToken");

        // newAccessToken 속성 값의 존재 여부를 확인합니다.
        return newAccessToken != null;
    }
}