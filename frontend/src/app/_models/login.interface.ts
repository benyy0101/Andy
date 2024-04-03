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
  jwtToken: string;
  kakao_nickname: string;
  memberId: string;
}

export interface KakaoLogoutRequest {
  logout_redirect_uri: string;
}
