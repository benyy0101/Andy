import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import Chalkak from "@/app/asset/lottie/Chalkak_quiz.json";
import Ddalkak from "@/app/asset/lottie/Ddalkak_quiz.json";
import Tryagin from "@/app/asset/lottie/Tryagain_quiz.json";
import { Wrapper } from "./styles/Page.styled";
import QuizButton from "./_components/QuizButton";

const btnData = [
  {
    quizName: "찰칵 퀴즈",
    quizImg: Chalkak,
    quizRoute: "quiz1",
    description: "주변에서 찾고, 사진을 찍어봐요",
  },
  {
    quizName: "딸깍 퀴즈",
    quizImg: Ddalkak,
    quizRoute: "quiz2",
    description: "이 사진이 무엇인지 맞춰보세요",
  },
  {
    quizName: "다시 풀기",
    quizImg: Tryagin,
    quizRoute: "incorrect_list",
    description: "지난 문제를 다시 풀어볼까요?",
  },
];

export default function MainQuiz() {
  return (
    <div className="flex flex-col h-svh w-full justify-center items-center">
      <BackgroundSVG />
      <Navigation />
      <Wrapper>
        {btnData.map((btn) => (
          <QuizButton
            key={btn.quizName}
            quizName={btn.quizName}
            quizImg={btn.quizImg}
            quizRoute={btn.quizRoute}
            description={btn.description}
          />
        ))}
      </Wrapper>
    </div>
  );
}
