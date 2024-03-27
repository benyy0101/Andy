"use client";

import React, { useState, useEffect } from "react";
import { AnswerBackground, NextButton, AnswerContent } from "./styles/ModalAnswer.styled";

interface AnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
  answer: string;
  onNext: () => void;
}

function AnswerModal(props: AnswerModalProps) {
  const { isOpen, onClose, answer, onNext } = props;
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
          <AnswerContent>정답: {answer}</AnswerContent>
          <NextButton onClick={() => { onNext(); onClose(); }}>다음으로</NextButton>
        </AnswerBackground>
      )}
    </>
  );
}

export default AnswerModal;
