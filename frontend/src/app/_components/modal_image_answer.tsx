"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnswerBackground, NextButton, AnswerContent } from "./styles/ModalImageAnswer.styled";

interface ImageAnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
  picture: string;
  onNext: () => void;
}

function AnswerModal(props: ImageAnswerModalProps) {
  const { isOpen, onClose, picture, onNext } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            {/* <Image
                width={300}
                height={300}
                src={question_picture}
                objectFit="cover"
                alt="랜덤 이미지"
                className="object-cover"
                priority
            /> */}
          </AnswerContent>
          <NextButton onClick={() => { onNext(); onClose(); }}>다음으로</NextButton>
        </AnswerBackground>
      )}
    </>
  );
}

export default AnswerModal;
