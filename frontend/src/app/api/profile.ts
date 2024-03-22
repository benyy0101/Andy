import {
  CreateBabyProfileRequest,
  CreateBabyProfileResponse,
  RemoveBabyProfileResponse,
} from "../_models/profile.interface";
import { imageAxios, localAxios } from "./http-commons";

// PROFILE-001
export const createProfile = async (
  request: CreateBabyProfileRequest,
): Promise<CreateBabyProfileResponse> => {
  const response = await localAxios.post("/profile", request);
  return response.data;
};

// PROFILE-002
export const removeProfile = async (
  child_seq: string,
): Promise<RemoveBabyProfileResponse> => {
  const response = await localAxios.delete(`/profile/${child_seq}`);
  return response.data;
};

// PROFILE-003
export const updateProfile = async (request: CreateBabyProfileRequest) => {
  const response = await localAxios.patch("/profile", request);
  return response.data;
};

// PROFILE-004
export const getProfile = async (child_seq: string) => {
  const response = await localAxios.get(`/profile/${child_seq}`);
  return response.data;
};
// PROFILE-005
export const getProfileList = async () => {
  const response = await localAxios.get("/profile");
  return response.data;
};

// PROFILE-006
export const uploadProfileImage = async (formData: FormData) => {
  const response = await imageAxios.post("/profile/image", formData);
  return response.data;
};
