import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import QuizButton from "./_components/QuizButton";
import { Wrapper } from "./styles/Page.styled";

const btnData = [
  {
    quizName: "찾아보기",
    quizImg: "/asset/image/quiz-camera.png",
    quizRoute: "quiz1",
  },
  {
    quizName: "맞춰보기",
    quizImg: "/asset/image/quiz-guessing.png",
    quizRoute: "quiz2",
  },
  {
    quizName: "다시 풀기",
    quizImg: "/asset/image/quiz-retry.png",
    quizRoute: "incorrect_list",
  },
];

export default function MainQuiz() {
  return (
    <>
      <BackgroundSVG />
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
    </>
  );
}
