import Logo from "../../_components/logo/Logo";
import QuizButton from "./_components/QuizButton";
// import { My_profile } from "../../_components/my_profile/MyProfile"
import { Wrapper, Btn } from "./styles/Page.styled";

const btnData = [
  {
    quiz_name: "퀴즈 1",
    quiz_img: "",
    quiz_route: "quiz1",
  },
  {
    quiz_name: "퀴즈 2",
    quiz_img: "",
    quiz_route: "quiz2",
  },
  {
    quiz_name: "다시 풀기",
    quiz_img: "",
    quiz_route: "incorrect_list",
  },
];

export default function MainQuiz() {
  return (
    <Wrapper>
      <Logo />
      {/* <My_profile /> */}
      <Btn>
        {btnData.map((btn) => (
          <QuizButton
            key={btn.quiz_name}
            quiz_name={btn.quiz_name}
            quiz_img={btn.quiz_img}
            quiz_route={btn.quiz_route}
          />
        ))}
      </Btn>
    </Wrapper>
  );
}
