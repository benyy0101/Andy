'use client'

import React from "react";
import Lottie from 'react-lottie-player';
import Quiz1Icon from "../../../../../public/Chalkak_quiz.json"
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
                        제한 시간 내에<br />
                        단어에 맞는 물건을 찾아<br />
                        카메라로 찍어보세요!
                    </Des>
                </DesWrapper>
            </Description>
            <AnimationImg>
                <Lottie
                    loop
                    animationData={Quiz1Icon}
                    play
                />
            </AnimationImg>
        </TutorialWrapper>
    );
};
