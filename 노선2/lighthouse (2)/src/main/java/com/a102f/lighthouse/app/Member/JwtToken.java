package com.a102f.lighthouse.app.Member;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@AllArgsConstructor
@Getter
@JsonInclude(NON_NULL)
public class JwtToken {
    private String grantType;
    private String accessToken;
    private String refreshToken;

    public String deleteRefreshToken(){
        String refreshToken = this.refreshToken;
        this.refreshToken = null;
        return refreshToken;
    }
}
