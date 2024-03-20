import { useProfileList } from "@/app/hooks/useProfile";
import Logo from "../../_components/logo/Logo";
import Profile from "./_components/profile";
import ProfileAdd from "./_components/profile_add";
// import { Tutorial_Btn } from "../../_components/tutorial_btn/tutorial_btn"
import { Wrapper, Profiles } from "./styles/Page.styled";

export default function ProfileList() {
  const { data } = useProfileList();
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <Wrapper>
      <Logo />
      <Profiles>
        <Profile />
        <ProfileAdd />
      </Profiles>
      {/* <Tutorial_Btn /> */}
    </Wrapper>
  );
}
