package com.a102f.lighthouse.app.Member.Controller;


import com.a102f.lighthouse.app.Member.Controller.Dto.LoginResponseDto;
import com.a102f.lighthouse.app.Member.JwtToken;
import com.a102f.lighthouse.app.Member.Service.OauthKakaoLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OauthMemberLoginController {
    @Value("${spring.jwt.refresh-token-validity-in-seconds}")
    private long refreshTokenValidityInSeconds;
    @Autowired
    private OauthKakaoLoginService oauthKakaoLoginService;

    @GetMapping("/member/login")
    public ResponseEntity<?> login(@RequestParam(name = "code") String authenticationCode){
        LoginResponseDto res = oauthKakaoLoginService.login(authenticationCode);
        HttpHeaders headers = getHeadersWithCookie(res);
        return new ResponseEntity<>(res, headers, HttpStatus.OK);
    }
    @GetMapping("/code")
    public ResponseEntity<?> code(@RequestParam(name = "code") String authenticationCode){
        LoginResponseDto loginResponseDto = new LoginResponseDto("1","2","3",new JwtToken("123","123","123"));
        return new ResponseEntity<>(loginResponseDto,HttpStatus.OK);
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
