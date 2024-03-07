'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import tw from 'tailwind-styled-components';

import Image from 'next/image';
import CorrectImage from '@/app/asset/_img/correct.png';


interface CorrectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CorrectModal: React.FC<CorrectModalProps> = ({ isOpen, onClose }) => {
  const [conductor, setConductor] = useState<TConductorInstance>(null);
  const [isConductorInit, setIsConductorInit] = useState(false);

  // const onInit = useCallback(({ conductor }: { conductor: TConductorInstance }) => {
  //   if(conductor == null){
  //     console.log(conductor);
  //     setConductor(conductor);
  //   }
  // },[]);
  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    conductor.shoot();
  };

  // 의존성 문제 
  // Maximum update depth exceeded.

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
  `;

  const CorrectContent = tw.div`
  bg-yellow
  p-8
  rounded-lg
  text-center
  w-96
  `;

  return (
    <>
      {isOpen && (
        <CorrectBackground>
          <CorrectContent>
            {/* 정답 이미지 */}
            <div className="mb-10 flex items-center justify-center">
              <Image src={CorrectImage} alt="정답" width="150" height="150" />
            </div>
            <>
            </>
            <br />
            {/* 멘트 */}
            <button onClick={onClose} className="font-bold text-xl">정답입니다 !</button>
          </CorrectContent>
          <Fireworks onInit={onInit}/>
        </CorrectBackground>
      )}
    </>
  );
};

export default CorrectModal;