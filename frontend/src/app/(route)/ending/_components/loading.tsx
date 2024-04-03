"use client";

import React from "react";
import Image from "next/image";
import AndyFace from "@/app/asset/_img/andy_face.png";


function Loading() {
  return (
    <div className="flex justify-center items-center w-auto h-auto mt-15 mb-5 relative">
      <div className="border-t-8 border-t-yellow border-8 border-white h-64 w-64 rounded-full animate-spinner" />
      <div className="absolute text-xl font-semibold">
        <Image src={AndyFace} height={60} width={60} className="flex justify-center items-center mb-5 ml-8" alt="얼굴" />
        과연 점수는?!
      </div>
    </div>
  );
}

export default Loading;
