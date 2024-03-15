package com.a102.andy.common.enums;

public enum RedirectUri {
    KAKAO_OAUTH("http://localhost:8080/api/code");

    private final String uri;

    RedirectUri(String uri) {
        this.uri = uri;
    }

    public String getUri() {
        return uri;
    }
}

