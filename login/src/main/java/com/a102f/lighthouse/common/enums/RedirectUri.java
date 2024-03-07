package com.a102f.lighthouse.common.enums;

import lombok.Getter;

public enum RedirectUri {
    KAKAO_OAUTH("http://localhost:3000/login/kakao");

    private final String uri;

    RedirectUri(String uri) {
        this.uri = uri;
    }

    public String getUri() {
        return uri;
    }
}

