package com.a102.andy.aspect;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
public class AccessTokenAspect {

    @Pointcut("execution(* com.a102.andy.app.solution..*.*(..))")
    public void controllerMethods() {}

    @AfterReturning("controllerMethods()")
    public void afterReturningControllerMethods(JoinPoint joinPoint) throws Exception {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        HttpServletResponse response = attributes.getResponse();

        if (response != null && request != null) {
            boolean isAccessTokenUpdated = checkAccessTokenUpdate(request);

            if (isAccessTokenUpdated) {
                // 업데이트 되었다면 응답 헤더에 추가 정보 포함
                response.setHeader("AccessToken-Updated", (String)request.getAttribute("newAccessToken"));
                response.setStatus(HttpServletResponse.SC_RESET_CONTENT);
            }
        }
    }

    private boolean checkAccessTokenUpdate(HttpServletRequest request) {
        // 요청 객체에서 newAccessToken 속성 값을 가져옵니다.
        String newAccessToken = (String) request.getAttribute("newAccessToken");

        // newAccessToken 속성 값의 존재 여부를 확인합니다.
        return newAccessToken != null;
    }
}
