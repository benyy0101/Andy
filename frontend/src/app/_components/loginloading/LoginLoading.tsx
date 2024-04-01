"use client";

import React from "react";
import Image from "next/image";
import Andy from "@/app/asset/_img/andy.png";

function LoginLoading() {
  return (
    <div className="flex justify-center items-center w-auto h-auto pt-30 mt-20 relative">
      <div className="pt-15 border-t-8 border-t-yellow border-8 border-white h-64 w-64 rounded-full animate-spinner" />
      <div className="absolute text-xl font-semibold">
        <Image src={Andy} height={100} width={100} className="mb-3" alt="앤디" />
        로그인 중
      </div>
    </div>
  );
}

export default LoginLoading;
