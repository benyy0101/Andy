"use client";

import { useRouter } from "next/navigation";
import { Quiz1Wrapper, Quiz1Img } from "../styles/Page.styled";

interface IQuizButton {
  quiz_name: string;
  quiz_img: string;
  quiz_route: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quiz_name, quiz_img, quiz_route } = props;
  const router = useRouter();

  const routetoQuiz = () => {
    router.push(quiz_route);
  };

  return (
    <Quiz1Wrapper>
      <Quiz1Img onClick={routetoQuiz}>{quiz_name}</Quiz1Img>
    </Quiz1Wrapper>
  );
}
