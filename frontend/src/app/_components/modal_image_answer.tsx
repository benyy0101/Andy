/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AnswerBackground,
  NextButton,
  AnswerContent,
} from "./styles/ModalImageAnswer.styled";

interface ImageAnswerModalProps {
  isOpen: boolean;
  picture: string;
  onNext: () => void;
}

function ImageModal(props: ImageAnswerModalProps) {
  const { isOpen, picture, onNext } = props;
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsExploding(true);
    }
  }, [isOpen]);

  return (
    <>
      <div />
      {isOpen && (
        <AnswerBackground>
          <AnswerContent>
            <div>정답 예시</div>
            <Image
              width={300}
              height={300}
              src={picture}
              objectFit="cover"
              alt="랜덤 이미지"
              className="object-cover rounded-lg"
              priority
            />
          </AnswerContent>
          <NextButton
            onClick={() => {
              onNext();
            }}
          >
            다음으로
          </NextButton>
        </AnswerBackground>
      )}
    </>
  );
}

export default ImageModal;
