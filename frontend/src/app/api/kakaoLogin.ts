import { KakaoAuth,KakaoLoginResponse } from "../_models/login.interface";
import { kakaoAxios,localAxios } from "./http-commons";

export const kakaoLogin = (code: string) => {
    return kakaoAxios.post("/v2/user/me", {
    });
};

export const kakaoLogout = (code: string) => {
    return kakaoAxios.post("/v1/user/logout", {
    });
};

export const authCodetoServer = async (kakaoAuth: KakaoAuth) : Promise<KakaoLoginResponse> => {
    return await kakaoAxios.post("/member/login", kakaoAuth);
};

