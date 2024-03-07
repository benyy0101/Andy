'use client'
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';


interface AnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnswerModal: React.FC<AnswerModalProps> = ({ isOpen, onClose }) => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsExploding(true);
    }

  }, [isOpen, onClose]);


  const AnswerBackground = tw.div`
  fixed 
  top-0 
  left-0 
  w-full 
  h-full 
  flex items-center 
  justify-center 
  bg-black
  bg-opacity-60
  `;

  const AnswerContent = tw.div`
  bg-white
  p-8
  rounded-lg
  text-center
  `;

  const NextButton = tw.button`
    mt-4
    px-4
    py-2
    bg-blue-500
    text-white
    rounded
    hover:bg-blue-600
  `;

  return (
    <>
      {isOpen && (
        <AnswerBackground>
          
          <NextButton onClick={onClose}>다음으로</NextButton>

        </AnswerBackground>
      )}
    </>

  );
};

export default AnswerModal;