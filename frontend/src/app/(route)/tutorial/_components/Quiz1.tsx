'use client'

import React from "react";
import Lottie from 'react-lottie-player';
import Quiz1Icon from "../../../../../public/Quiz1.json"
import { TutorialWrapper, Name, Des, AnimationImg, Description, DesWrapper } from "../styles/pages.styled";

// interface TutorialM {
//     quizName: string;
//     quizDes: React.JSX.Element;
// }

interface StyleP {
    opacity: number;
}

export default function Quiz1(props: StyleP){
    const { opacity } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    return(
        <TutorialWrapper style={{opacity}}>
            <Description>
                <DesWrapper>
                    <Name>찰칵 퀴즈</Name>
                    <Des>
                        단어에 맞는 물건을 <br />
                        카메라로 찍어보세요!
                    </Des>
                </DesWrapper>
            </Description>
            <AnimationImg>
                <Lottie
                    loop
                    animationData={Quiz1Icon}
                    play
                    style={{ marginBottom: "70px" }}
                />
            </AnimationImg>
        </TutorialWrapper>
    );
};
