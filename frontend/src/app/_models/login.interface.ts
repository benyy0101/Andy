import { gender } from "./enums";

export interface KakaoAuth {
    code: string;
}

export interface KakaoLoginResponse {
    token_type: string,
    access_token: string,
    id_token: string | null,
    refresh_token: string,
    expires_in: number,
    refresh_token_expires_in: number
}

export interface LoginResponse{
    kakao_name: string,
    access_token: string,
    profiles: BabyProfile[],
}

export interface KakaoLogoutRequest {
    logout_redirect_uri: string,
}

export interface BabyProfile {
    child_seq: string;
    child_name: string;
    child_picture: string;
}

export interface CreateBabyProfileRequest {
    kakao_id:string;
    child_name: string,
    child_birthday:string,
    child_gender: gender,
    child_picture: string | null,
}

export interface CreateBabyProfileResponse{
	child_seq:number,
	child_name:string,
	child_picture: string
}

export interface RemoveBabyProfileRequest {
    child_seq: string;
}