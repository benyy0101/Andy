import tw from "tailwind-styled-components";
import { Logo } from "../../_components/logo/Logo";
import { Quiz1_btn } from "./_components/quiz1_btn";
import { Quiz2_btn } from "./_components/quiz2_btn";
import { Study_btn } from "./_components/study_btn";
import { My_profile } from "../../_components/my_profile/MyProfile";

export default function Main_1() {
  return (
    <Wrapper>
      <Logo />
      <My_profile />
      <Btn>
        <Quiz1_btn />
        <Quiz2_btn />
        <Study_btn />
      </Btn>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
flex-col
items-center
justify-center
h-[100vh]
relative
`;

const Btn = tw.div`
flex
align-center
justify-center
mt-10
`;

// flex-wrap
