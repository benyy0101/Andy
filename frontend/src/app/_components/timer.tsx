"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rectangle from "@/app/asset/_img/Rectangle.png";

interface TimerProps {
  reset: boolean;
  isPlaying: boolean;
  handleWrong: () => void;
}

function Timer(props: TimerProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { reset, handleWrong, isPlaying } = props;
  const [timer, setTimer] = useState<number>(60); // 타이머 시간 30초로 설정

  useEffect(() => {
    let interval: number | undefined;
    if (timer >= 0 && isPlaying) {
      interval = window.setTimeout(() => {
        setTimer((time) => time - 1);
      }, 1000);
    } else if (timer < 0) {
      handleWrong();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (reset) {
      setTimer(60); // Reset the timer when reset prop changes
    }
  }, [reset]);

  const calculateTime = () => {
    // let minutes: string | number = Math.floor(timer / 60);
    let seconds: string | number = Math.floor(timer % 60);

    // minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return timer >= 0 ? `${seconds}` : "";
  };

  return (
    <div className="flex justify-end web:w-5/6 web:items-center items-end">
      <Image src={Rectangle} width={50} height={50} alt="fff" />

      <span
        id="MyTimer"
        className={`font-thin web:text-4xl text-2xl min-w-14 ${timer < 10 && `text-rose-600 animate-ping`}`}
      >
        {calculateTime()}
      </span>
    </div>
  );
}

export default Timer;
