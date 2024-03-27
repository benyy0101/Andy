package com.a102.andy.util;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class KeyUtil {
    public static String getRefreshTokenKey(String memberId) {
        return "REFRESH_TOKEN:" + memberId;
    }
}