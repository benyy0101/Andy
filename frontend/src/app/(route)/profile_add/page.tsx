import tw from "tailwind-styled-components";
import { Logo } from "../../_components/logo/Logo";
import { Profile_img } from "./_components/profile_img";
import { Profile_form } from "./_components/profile_form";
import { Tutorial_Btn } from "../../_components/tutorial_btn/tutorialBtn";

export default function Profile_add() {
  return (
    <Wrapper>
      <Logo />
      <Profile_wrapper>
        <Profile_img />
        <Profile_form />
      </Profile_wrapper>
      <Tutorial_Btn />
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
justify-center
items-center
`;

const Profile_wrapper = tw.div`
flex
justify-center
items-center
h-[100vh]
`;

// flex-wrap
