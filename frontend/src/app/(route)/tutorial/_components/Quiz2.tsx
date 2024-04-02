"use client";

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from "react-lottie-player";
import Quiz2Icon from "../../../../../public/Ddalkak_quiz.json";
import {
  TutorialWrapper2,
  Name,
  Des,
  AnimationImg,
  Description,
  DesWrapper,
} from "../styles/pages.styled";

// interface TutorialM {
//     quizName: string;
//     quizDes: React.JSX.Element;
// }

interface StyleP {
  opacity: number;
}

export default function Quiz2(props: StyleP) {
  const { opacity } = props;
  // const { quizName, quizDes } = props;

  return (
    <TutorialWrapper2 style={{ opacity }}>
      <AnimationImg>
        <Lottie
          loop
          animationData={Quiz2Icon}
          play
          style={{ width: "250px", height: "250px" }}
        />
      </AnimationImg>
      <Description>
        <DesWrapper>
          <Name>딸깍 퀴즈</Name>
          <Des>
            제한 시간 내에
            <br />
            사진에 맞는 단어를 <br />
            입력해보세요!
          </Des>
        </DesWrapper>
      </Description>
    </TutorialWrapper2>
  );
}
