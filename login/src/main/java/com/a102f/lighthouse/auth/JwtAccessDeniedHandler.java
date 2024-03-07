package com.a102f.lighthouse.auth;

import com.a102f.lighthouse.error.errorcode.CustomErrorCode;
import com.a102f.lighthouse.error.exception.RestApiException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        //필요한 권한이 없이 접근하려 할때 403
        throw new RestApiException(CustomErrorCode.WRONG_ACCESS_WITHOUT_AUTHORIZATION);
    }

}