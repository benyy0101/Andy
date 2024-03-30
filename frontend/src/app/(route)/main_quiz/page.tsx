import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import QuizButton from "./_components/QuizButton";
import { Wrapper } from "./styles/Page.styled";

const btnData = [
  {
    quizName: "찰칵 퀴즈",
    quizImg: "",
    quizRoute: "",
  },
  {
    quizName: "딸깍 퀴즈",
    quizImg: "",
    quizRoute: "quiz2",
  },
  {
    quizName: "다시 풀기",
    quizImg: "",
    quizRoute: "incorrect_list",
  },
];

export default function MainQuiz() {
  return (
    <div className="flex flex-col h-svw">
      <BackgroundSVG />
      <Navigation />
      <Wrapper>
        {btnData.map((btn) => (
            <QuizButton
              key={btn.quizName}
              quizName={btn.quizName}
              quizImg={btn.quizImg}
              quizRoute={btn.quizRoute}
            />
          ))}
      </Wrapper>
    </div>
  );
}
