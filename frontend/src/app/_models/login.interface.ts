import { BabyProfile } from "./profile.interface";

export interface KakaoAuth {
  code: string;
}

export interface KakaoLoginResponse {
  token_type: string;
  access_token: string;
  id_token: string | null;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
}

export interface LoginResponse {
  kakao_name: string;
  access_token: string;
  profiles: BabyProfile[];
}

export interface KakaoLogoutRequest {
  logout_redirect_uri: string;
}
