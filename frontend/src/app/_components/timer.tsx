"use client";

import React, { useEffect, useState } from "react";
import Image  from 'next/image';
import Rectangle from '@/app/asset/_img/Rectangle.png'

interface TimerProps {
  reset: boolean;
  handleWrong: () => void;
}

function Timer(props: TimerProps) {
  const { reset, handleWrong } = props;
  const [timer, setTimer] = useState<number>(30); // 타이머 시간 30초로 설정

  useEffect(() => {
    let interval: number | undefined;

    if (timer >= 0) {
      interval = window.setTimeout(() => {
        setTimer((time) => time - 1);
      }, 1000);
    } else {
      handleWrong();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (reset) {
      setTimer(30); // Reset the timer when reset prop changes
    }
  }, [reset]);

  const calculateTime = () => {
    // let minutes: string | number = Math.floor(timer / 60);
    let seconds: string | number = Math.floor(timer % 60);

    // minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return timer >= 0 ? `${seconds}` : "시간이 다 되었습니다!";
  };

  return (
    <div className="flex justify-end w-5/6 items-center">
      <Image src={Rectangle} width={50} height={50} alt="fff"/>

<span id="MyTimer" className="font-bold text-xl min-w-12">
      {calculateTime()}
    </span>
    </div>
    
  );
}

export default Timer;
