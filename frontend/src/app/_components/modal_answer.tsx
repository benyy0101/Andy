"use client";

import React, { useState, useEffect } from "react";
import { AnswerBackground, AnswerContent, NextButton } from "./styles/ModalAnswer.styled";

interface AnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AnswerModal(props: AnswerModalProps) {
  const { isOpen, onClose } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsExploding(true);
    }
  }, [isOpen, onClose]);


  return (
    <>
      <div />
      {isOpen && (
        <AnswerBackground>
          <AnswerContent>정답 : 사과</AnswerContent>
          <NextButton onClick={onClose}>다음으로</NextButton>
        </AnswerBackground>
      )}
    </>
  );
}

export default AnswerModal;
