// MYPAGE-001

import {
  MyInfoByDateRequest,
  MyInfoByMonthRequest,
} from "../_models/mypage.interface";
// import storeProfile from "../_store/storeProfile";
import { mypageAxios } from "./http-commons";

export const getMyInfoByMonth = async (
  request: MyInfoByMonthRequest | null,
) => {
  const reponse = await mypageAxios.post(`/mypage/month`, request);
  return reponse.data;
};

// MYPAGE-002

export const getMyInfoByDate = async (request: MyInfoByDateRequest) => {
  // const { profile } = storeProfile();
  const response = await mypageAxios.post(
    `/mypage/day`,
    request,
  );
  return response.data;
};
