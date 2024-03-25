"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import storeProfile from "@/app/_store/storeProfile";
import { useLogin } from "../../../hooks/useLogin";

function KakaoLogin() {
  const router = useRouter();
  const { profile, setName } = storeProfile((state) => state);
  let code = "";
  if (typeof window !== "undefined") {
    // 인가코드
    const codeParam = new URL(window.location.href).searchParams.get("code");
    code = codeParam !== null ? codeParam : "";
  }

  const { data } = useLogin({ code });

  useEffect(() => {
    if (data) {
      setName(data.nickname);
      router.push("/profile_list");
    }
  }, [data, router]);

  return <div>히히 카카오 로그인 성공!</div>;
}

export default KakaoLogin;
