'use client'

import React from "react";
import Lottie from 'react-lottie-player';
import Review1 from "../../../../../public/Review.json"
import { TutorialWrapper, Name, Des, AnimationImg, Description, DesWrapper } from "../styles/pages.styled";

// interface TutorialM {
//     quizName: string;
//     quizDes: React.JSX.Element;
// }

interface StyleP {
    opacity: number;
}

export default function Review(props: StyleP){
    const { opacity } = props;
    // const { quizName, quizDes } = props;

    return(
        <TutorialWrapper style={{opacity}}>
            <Description>
                <DesWrapper>
                    <Name>문제 다시 풀기</Name>
                    <Des>
                        틀린 문제들을 <br />
                        다시 풀어보세요!
                    </Des>
                </ DesWrapper>
            </Description>
            <AnimationImg>
                <Lottie
                    loop
                    animationData={Review1}
                    play
                    style={{ width: "250px", height: "250px", marginBottom: "10px"}}
                />
            </AnimationImg>
        </TutorialWrapper>
    );
};
