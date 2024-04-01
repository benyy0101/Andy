'use client'

import React, { useState, useEffect } from "react";
import Lottie from 'react-lottie-player';
import quizquiz from "../../../../../public/Quiz1.json"
import { TutorialWrapper, Name, Des, AnimationImg, Description } from "../styles/pages.styled";

interface TutorialM {
    quizName: string;
    quizDes: React.JSX.Element;
}

export default function TutorialDesc(props: TutorialM){
    const { quizName, quizDes } = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const componentPosition = document.getElementById(quizName)?.offsetTop;
    
          if (scrollPosition > componentPosition! ) {
            setIsVisible(true);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [quizName]);

    return(
        <TutorialWrapper
        id={quizName}
        className={`tutorial-desc ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <Description>
                <Name>{quizName}</Name>
                <Des>{quizDes}</Des>
            </Description>
            <AnimationImg>
                <Lottie
                    loop
                    animationData={quizquiz}
                    play
                />
            </AnimationImg>
        </TutorialWrapper>
    );
};
