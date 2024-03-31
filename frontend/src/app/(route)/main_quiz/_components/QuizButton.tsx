"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Quiz1Img } from "../styles/Page.styled";

interface IQuizButton {
  quizName: string;
  quizImg: string;
  quizRoute: string;
}

export default function QuizButton(props: IQuizButton) {
  const { quizName, quizImg, quizRoute } = props;
  const router = useRouter();
  const routetoQuiz = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play();
    if (quizRoute === "incorrect_list") {
      const route = "/incorrect_list";
      router.push(route);
    } else {
      const route = `/category?mode=${quizRoute}`;
      router.push(route);
    }
  };

  return (
    // eslint-disable-next-line react/button-has-type, jsx-a11y/click-events-have-key-events
    <div
      className="flex flex-col space-y-4 transition-all hover:scale-110
    hover:-translate-y-10"
    >
      <Quiz1Img onClick={routetoQuiz}>
        <Image src={quizImg} height={200} width={200} alt="fd" />
      </Quiz1Img>
      <div
        className="font-bold
text-[25px]"
      >
        {quizName}
      </div>
    </div>
  );
}
