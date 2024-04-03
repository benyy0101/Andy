"use client";

import React, { useEffect } from "react";
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
  description: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quizName, quizImg, quizRoute, description } = props;
  const router = useRouter();
  const enterSoundUrl = "/asset/audio/click.mp3";
  const effectUrl = "/asset/audio/hover.mp3";

  useEffect(() => {
    // Preload the audio file
    const audio = new Audio(effectUrl);
    audio.preload = "auto";
  }, [effectUrl]);

  const playAudio = () => {
    const audio = new Audio(enterSoundUrl); // Provide the path to your audio file
    audio.play();
  };

  const playSound = () => {
    const audio = new Audio(effectUrl);
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
    <WholeWrapper onClick={routetoQuiz} onMouseEnter={playSound}>
      <QuizTitle>{quizName}</QuizTitle>
      <QuizCircleContainer>
        <Lottie animationData={quizImg} />
      </QuizCircleContainer>
      <div>{description}</div>
    </WholeWrapper>
  );
}
