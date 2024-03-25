"use client";

import React  from "react";
import Image from "next/image";
import { Photobox } from "./styles/photo.styled";

interface PhotoProps {
  question_picture: string;
}


function Photo({ question_picture }: PhotoProps) {
  return (
    <Photobox>
        <Image
          width={300}
          height={200}
          src={question_picture}
          alt="랜덤 이미지"
          className="object-cover"
        />
    </Photobox>
  );
}

export default Photo;
