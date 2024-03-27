"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WrongImage from "@/app/asset/_img/wrong.png";
import { CorrectBackground, CorrectContent } from "./styles/ModalWrong.styled";

interface WrongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function WrongModal(props: WrongModalProps) {
  const { isOpen, onClose } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isOpen) {
      // 모달이 열릴 때 3초 후에 자동으로 닫히도록 설정
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <>
      <div />
      {isOpen && (
        <CorrectBackground>
          <CorrectContent>
            {/* 오답 이미지 */}
            <div className="mb-10 flex items-center justify-center">
              <Image src={WrongImage} alt="오답" width="150" height="150" />
            </div>
            <br />
            {/* 멘트 */}
            <button
              className="font-bold text-xl"
              type="button"
            >
              다시 생각해봐요..!
            </button>
          </CorrectContent>
        </CorrectBackground>
      )}
    </>
  );
}

export default WrongModal;
