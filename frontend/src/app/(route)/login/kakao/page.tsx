'use client'
import React, { useEffect } from "react";
import { useLogin } from "../../../hooks/useLogin"
import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter();

    let code = ""
    if (typeof window !== "undefined") {
        // 인가코드
        const codeParam = new URL(window.location.href).searchParams.get("code");
        code = codeParam !== null ? codeParam : "";
    }

    const {data, error} = useLogin({ code });

    useEffect(() => {
      console.log(code)
      if (data){
        router.push('/profile_list')
      }
    }, [data])

  return (
    <div>히히 카카오 로그인 성공!</div>
  )
}