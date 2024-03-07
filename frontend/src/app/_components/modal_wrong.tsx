'use client'
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';

import Image from 'next/image';
import WrongImage from '@/app/asset/_img/wrong.png';


interface WrongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WrongModal: React.FC<WrongModalProps> = ({ isOpen, onClose }) => {
  const [isExploding, setIsExploding] = useState(false);
  

  useEffect(() => {
    if (isOpen) {
      setIsExploding(true);
    } else {
      setIsExploding(false);
    }
  }, [isOpen]);


  const CorrectBackground = tw.div`
  fixed 
  top-0 
  left-0 
  w-full 
  h-full 
  flex items-center 
  justify-center 
  bg-black
  bg-opacity-60
  `

  const CorrectContent = tw.div`
  text-white
  bg-red
  p-8
  rounded-lg
  text-center
  w-96
  `

  return (
    <>
      {isOpen && (
        <CorrectBackground>
          <CorrectContent>
            {/* 오답 이미지 */}
            <div className="mb-10 flex items-center justify-center">
              <Image src={WrongImage} alt="오답" width="150" height="150" />
            </div>
            <br />
            {/* 멘트 */}
            <button onClick={onClose} className="font-bold text-xl">다시 생각해봐요..!</button>
          </CorrectContent>
        </CorrectBackground>
      )}
    </>
  );
};

export default WrongModal;