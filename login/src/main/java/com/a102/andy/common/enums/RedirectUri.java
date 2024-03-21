package com.a102.andy.common.enums;

public enum RedirectUri {
    KAKAO_OAUTH("https://j10a102.p.ssafy.io/login/kakao");

    private final String uri;

    RedirectUri(String uri) {
        this.uri = uri;
    }

    public String getUri() {
        return uri;
    }
}

