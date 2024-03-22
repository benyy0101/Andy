import TutorialBtn from "@/app/_components/tutorial_btn/tutorialBtn";
import Logo from "../../_components/logo/Logo";
import ProfileAdd from "./_components/profile_add";
import { Wrapper, Profiles } from "./styles/Page.styled";
import ProfileContainer from "./_components/ProfileContainer";

export default function ProfileList() {
  return (
    <Wrapper>
      <Logo />
      <Profiles>
        <ProfileContainer />
        <ProfileAdd />
      </Profiles>
      <TutorialBtn />
    </Wrapper>
  );
}
