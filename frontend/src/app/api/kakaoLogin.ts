import { kakaoAxios,localAxios } from "./http-commons";

export const kakaoLogin = (code: string) => {
    return kakaoAxios.post("/v2/user/me", {
    });
};

export const kakaoLogout = (code: string) => {
    return kakaoAxios.post("/v1/user/logout", {
    });
};

export const kakaoRedirect = (code: string) => {
    return kakaoAxios.post("/v1/user/logout", {
    });
};

