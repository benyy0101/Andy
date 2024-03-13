import { KakaoAuth,KakaoLoginResponse, LoginResponse } from "../_models/login.interface";
import { kakaoAxios,localAxios } from "./http-commons";

//MEMBER-001
export const kakaoLogin = async (kakaoAuth: KakaoAuth): Promise<LoginResponse> => {
    try{
        const response = await kakaoAxios.post("/member/login", kakaoAuth);
        return response.data;
    }
    catch (error){
        throw error;
    }
};

//MEMBER-???
export const kakaoLogout = (code: string) => {
    return kakaoAxios.post("/v1/user/logout", {
    });
};

