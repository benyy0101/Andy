import tw from "tailwind-styled-components";
import { Logo } from "../../_components/logo/Logo";
import { Profile } from "./_components/profile";
import { Profile_add } from "./_components/profile_add";
import { Tutorial_Btn } from "../../_components/tutorial_btn/tutorial_btn";

export default function Profile_list() {
  return (
    <Wrapper>
      <Logo />
      <Profiles>
        <Profile />
        <Profile_add />
      </Profiles>
      <Tutorial_Btn />
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
flex-col
justify-center
`;

const Profiles = tw.div`
flex
justify-center
mt-30
h-[100vh]
`;
// flex-wrap
