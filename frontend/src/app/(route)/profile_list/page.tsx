import TutorialBtn from "@/app/_components/tutorial_btn/tutorialBtn";
import Logo from "../../_components/logo/Logo";
import Profile from "./_components/profile";
import ProfileAdd from "./_components/profile_add";
import { Wrapper, Profiles } from "./styles/Page.styled";
import ProfileBox from "./_components/ProfileBox";

export default function ProfileList() {
  return (
    <Wrapper>
      <ProfileBox />
      <Logo />
      <Profiles>
        <Profile />
        <ProfileAdd />
      </Profiles>
      <TutorialBtn />
    </Wrapper>
  );
}
