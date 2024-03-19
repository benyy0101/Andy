"use client";

import Image from "next/image";
import kakao_logo from "../../../asset/_img/kakao_logo.png";
import { Label, LoginBtn, Symbol } from "./styles/KakaoLogin.styled";

export function KakaoLogin() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <LoginBtn onClick={handleLogin}>
        <Symbol>
          <Image
            src={kakao_logo.src}
            alt="kakao logo"
            height={21}
            width={24}
            style={{
              filter:
                "invert(0%) sepia(1%) saturate(4%) hue-rotate(25deg) brightness(98%) contrast(101%)",
            }}
          />
        </Symbol>
        <Label>카카오 로그인</Label>
      </LoginBtn>
    </div>
  );
}
