"use client";

import React from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from "lottie-react";
import {
  QuizCircleContainer,
  QuizTitle,
  WholeWrapper,
} from "../styles/Page.styled";

interface IQuizButton {
  quizName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quizImg: any;
  quizRoute: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quizName, quizImg, quizRoute } = props;
  const router = useRouter();
  const soundUrl = "/asset/audio/click.mp3";
  const playAudio = () => {
    const audio = new Audio(soundUrl); // Provide the path to your audio file
    audio.play();
  };
  const routetoQuiz = () => {
    playAudio();
    if (quizRoute === "incorrect_list") {
      const route = "/incorrect_list";
      router.push(route);
    } else {
      const route = `/category?mode=${quizRoute}`;
      router.push(route);
    }
  };

  return (
    <WholeWrapper onClick={routetoQuiz}>
      <QuizCircleContainer>
        <Lottie animationData={quizImg}/>
      </QuizCircleContainer>
      <QuizTitle>{quizName}</QuizTitle>
    </WholeWrapper>
  );
}
