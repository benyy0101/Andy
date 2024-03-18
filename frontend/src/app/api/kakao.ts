import { KakaoAuth, LoginResponse } from "../_models/login.interface";
import { kakaoAxios } from "./http-commons";

// MEMBER-001
export const kakaoLogin = async (kakaoAuth: KakaoAuth): Promise<LoginResponse> => {
    const response = await kakaoAxios.post("/auth/login", kakaoAuth);
    return response.data;
};


