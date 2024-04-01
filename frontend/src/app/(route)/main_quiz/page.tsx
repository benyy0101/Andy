import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import QuizButton from "./_components/QuizButton";
import { Wrapper } from "./styles/Page.styled";

const btnData = [
  {
    quizName: "찰칵 퀴즈",
    quizImg: "https://lottie.host/embed/9d78a819-e94d-437c-a43e-9568a1b1b350/xZvXFKIveC.json",
    quizRoute: "",
  },
  {
    quizName: "딸깍 퀴즈",
    quizImg: "https://lottie.host/embed/e49d1c0e-1733-4d8b-b882-af3a04e8be51/GGoPoMUDIz.json",
    quizRoute: "quiz2",
  },
  {
    quizName: "다시 풀기",
    quizImg: "https://lottie.host/embed/26164f61-49a3-42b4-8a36-54ccccce2e56/ya6K1l3kTa.json",
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
