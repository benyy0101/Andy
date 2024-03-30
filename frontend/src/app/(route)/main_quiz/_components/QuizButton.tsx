"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { QuizCircleContainer } from "../styles/Page.styled";


interface IQuizButton {
  quizName: string;
  quizImg: string;
  quizRoute: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quizName, quizImg, quizRoute } = props;
  // eslint-disable-next-line no-console
  console.log(quizImg);
  const router = useRouter();
  const routetoQuiz = () => {
    if (quizRoute === "incorrect_list") {
      const route = "/incorrect_list";
      router.push(route);
    } else {
      const route = `/category?mode=${quizRoute}`;
      router.push(route);
    }
  };

  return (
    <QuizCircleContainer onClick={routetoQuiz}>{quizName}</QuizCircleContainer>
  );
}
