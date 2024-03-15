package com.a102.andy.auth.controller;

import com.a102.andy.auth.controller.dto.LoginResponseDto;
import com.a102.andy.auth.controller.dto.OAuthLoginResponse;
import com.a102.andy.auth.service.OAuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
public class OAuthController {

    private final OAuthService oAuthService;

    @Value("${spring.jwt.refresh-token-validity-in-seconds}")
    private long refreshTokenValidityInSeconds;

    @PostMapping("/login")
    public ResponseEntity<OAuthLoginResponse> kakaoLogin(@RequestParam String code){
        LoginResponseDto res = oAuthService.kakaoOAuthLogin(code);
        HttpHeaders headers = getHeadersWithCookie(res);
        OAuthLoginResponse oAuthLoginResponse = new OAuthLoginResponse(res);
        return new ResponseEntity<>(oAuthLoginResponse, headers, HttpStatus.OK);
    }

    private HttpHeaders getHeadersWithCookie(LoginResponseDto res) {
        ResponseCookie cookie = ResponseCookie.from("refreshToken", res.getJwtToken().deleteRefreshToken())
                .maxAge(refreshTokenValidityInSeconds)
                .path("/")
                .secure(true)
                .sameSite("None")
                .httpOnly(true)
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Set-Cookie", cookie.toString());
        return headers;
    }

}
