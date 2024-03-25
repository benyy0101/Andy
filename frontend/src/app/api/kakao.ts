import { KakaoAuth, LoginResponse } from "../_models/login.interface";
import { kakaoAxios } from "./http-commons";

// MEMBER-001
export const kakaoLogin = async (
  kakaoAuth: KakaoAuth,
): Promise<LoginResponse> => {
  const status = process.env.NEXT_PUBLIC_STATUS === "dev" ? "dev" : "prod";
  const response = await kakaoAxios.post(
    `/auth/login?status=${status}`,
    kakaoAuth,
  );
  return response.data;
};
