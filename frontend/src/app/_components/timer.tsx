'use client'

import React, { useEffect, useState } from "react";

function Timer () {
    const [timer, setTimer] = useState<number>(30); // 타이머 시간 30초로 설정

    useEffect(() => {
        let interval: number | undefined;

        if (timer >= 0) {
            interval = window.setTimeout(() => {
                setTimer(time => time -1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        }
    }, [timer]);

    const calculateTime = () => {
        // let minutes: string | number = Math.floor(timer / 60);
        let seconds: string | number = Math.floor(timer % 60);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
 
        return timer >= 0 ? `${seconds}` : "시간이 다 되었습니다!";
    }
    
    
    return(
        <span id="MyTimer" className="mt-20 font-bold mb-10">{calculateTime()}</span>
    );
};

export default Timer;
