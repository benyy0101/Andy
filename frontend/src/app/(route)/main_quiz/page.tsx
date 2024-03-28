import Navigation from "@/app/_components/navigation/Navigation";
import QuizButton from "./_components/QuizButton";
import { Wrapper } from "./styles/Page.styled";

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
    <div className="flex flex-col h-screen w-screen web:space-y-20">
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
