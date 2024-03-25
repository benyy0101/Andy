import { useQuery } from "@tanstack/react-query";
import { kakaoLogin } from "../api/kakao";
import { KakaoAuth, LoginResponse } from "../_models/login.interface";

export const useLogin = (data: KakaoAuth) => {
  // const { setName } = storeProfile((state) => state);
  const query = useQuery<LoginResponse>({
    queryKey: ["user"],
    queryFn: () => kakaoLogin(data),
    select: (newData) =>
      // storeProfile.getState().setName(newData.kakao_name);
      newData,
  });

  return query;
};
