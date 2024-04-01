"use client";

import React, { useEffect } from "react";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Image from "next/image";
import CorrectImage from "@/app/asset/_img/correct.png";
import {
  CorrectBackground,
  CorrectContent,
} from "./styles/ModalCorrect.styled";

interface CorrectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CorrectModal(props: CorrectModalProps) {
  const { isOpen, onClose } = props;

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    conductor.shoot();
  };

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
            {/* 정답 이미지 */}
            <div className="mb-10 flex items-center justify-center">
              <Image src={CorrectImage} alt="정답" width="150" height="150" />
            </div>
            <br />
            {/* 멘트 */}
            <button className="font-bold text-xl" type="button">
              정답입니다 !
            </button>
          </CorrectContent>
          <Fireworks onInit={onInit} />
        </CorrectBackground>
      )}
    </>
  );
}

export default CorrectModal;
