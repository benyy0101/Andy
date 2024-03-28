package com.a102.andy.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class AccessTokenInterceptor implements HandlerInterceptor {

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // accessTokenUpdated 여부를 확인하는 로직
        boolean isAccessTokenUpdated = checkAccessTokenUpdate(request);

        if (isAccessTokenUpdated) {
            // 업데이트 되었다면 응답 헤더에 추가 정보 포함
            response.setHeader("AccessToken-Updated", (String)request.getAttribute("newAccessToken"));
            response.setStatus(HttpServletResponse.SC_RESET_CONTENT);
        }
    }

    private boolean checkAccessTokenUpdate(HttpServletRequest request) {
        // 요청 객체에서 newAccessToken 속성 값을 가져옵니다.
        String newAccessToken = (String) request.getAttribute("newAccessToken");

        // newAccessToken 속성 값의 존재 여부를 확인합니다.
        return newAccessToken != null;
    }
}