import { Gender } from "./enums";

export interface BabyProfile {
  childSeq: string;
  childName: string;
  childPicture: string;
}

export interface CreateBabyProfileRequest {
  kakao_id: string;
  child_name: string;
  child_birthday: string;
  child_gender: Gender;
  child_picture: string | null;
}

export interface CreateBabyProfileResponse {
  child_seq: number;
  child_name: string;
  child_picture: string;
}

export interface RemoveBabyProfileResponse {
  child_seq: string;
}

export interface ProfileState extends BabyProfile {
  kakaoName: string;
}

export interface ProfileActions {
  setProfileInfo: (profile: BabyProfile) => void;
  setName: (kakaoname: string) => void;
  removeProfileInfo: () => void;
}

export interface ProfileListResponse {
  profiles: BabyProfile[];
}
