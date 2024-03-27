// MYPAGE-001

import {
  MyInfoByDateRequest,
  MyInfoByMonthRequest,
} from "../_models/mypage.interface";
import storeProfile from "../_store/storeProfile";
import { localAxios } from "./http-commons";

const { profile } = storeProfile();

export const getMyInfoByMonth = async (
  request: MyInfoByMonthRequest | null,
) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (profile.child_seq === "") {
    throw new Error("child_seq is empty");
  }
  if (!request)
    // eslint-disable-next-line no-param-reassign
    request = {
      year,
      month,
    };

  if (year && month) {
    const reponse = await localAxios.post(
      `/mypage/${profile.child_seq}/month`,
      request,
    );
    return reponse.data;
  }
  return null;
};
// MYPAGE-002

export const getMyInfoByDate = async (request: MyInfoByDateRequest) => {
  const response = await localAxios.post(
    `/mypage/${profile.child_seq}/day`,
    request,
  );
  return response.data;
};
