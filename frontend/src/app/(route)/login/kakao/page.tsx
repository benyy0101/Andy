"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import storeProfile from "@/app/_store/storeProfile";
import LoginLoading from "@/app/_components/loginloading/LoginLoading";
import { useLogin } from "../../../hooks/useLogin";
// import Loading from "../../ending/_components/loading";

function KakaoLogin() {
  const router = useRouter();
  const { setName } = storeProfile((state) => state);
  let code = "";
  if (typeof window !== "undefined") {
    // 인가코드
    const codeParam = new URL(window.location.href).searchParams.get("code");
    code = codeParam !== null ? codeParam : "";
  }

  const { data } = useLogin({ code });

  useEffect(() => {
    if (data) {
      setName(data.kakao_nickname);
      router.push("/profile_list");
    }
  }, [data, router]);

  return <div className="mt-10 pt-10"><LoginLoading /></div>;
}

export default KakaoLogin;
