import { useQuery } from "@tanstack/react-query";
import { kakaoLogin } from "../api/kakao";
import { KakaoAuth, LoginResponse } from "../_models/login.interface";
import storeProfile from "../_store/storeProfile";

export const useLogin = (data: KakaoAuth) => {
  const query = useQuery<LoginResponse>({
    queryKey: ["user"],
    queryFn: () => kakaoLogin(data),
    select: (newData) => {
      storeProfile.getState().setName(newData.kakao_name);
      return newData;
    },
  });

  return query;
};
