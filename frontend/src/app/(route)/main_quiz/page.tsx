import Navigation from "@/app/_components/navigation/Navigation";
import Logo from "../../_components/logo/Logo";
import QuizButton from "./_components/QuizButton";
import { Wrapper, Btn } from "./styles/Page.styled";

const btnData = [
  {
    quizName: "퀴즈 1",
    quizImg: "",
    quizRoute: "quiz1",
  },
  {
    quizName: "퀴즈 2",
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
    <div className="flex flex-col space-y-4">
      <Navigation />
      <Wrapper>
        <Btn>
          {btnData.map((btn) => (
            <QuizButton
              key={btn.quizName}
              quizName={btn.quizName}
              quizImg={btn.quizImg}
              quizRoute={btn.quizRoute}
            />
          ))}
        </Btn>
      </Wrapper>
    </div>
  );
}
