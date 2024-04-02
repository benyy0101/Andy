// import TutorialBtn from "@/app/_components/tutorial_btn/tutorialBtn";
import Logo from "@/app/_components/logo/Logo";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getProfileList } from "@/app/api/profile";
import getQueryClient from "@/app/utils/queryClient";
import BackgroundSVG from "@/app/_components/background/Background";
import { Wrapper, Profiles, LogoWrapper } from "./styles/Page.styled";
import ProfileContainer from "./_components/ProfileContainer";

export default async function ProfileList() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profileList"],
    queryFn: getProfileList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BackgroundSVG />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <div style={{ fontSize: "25px" }}>프로필을 선택해주세요!</div>
      <Wrapper>
        <Profiles>
          <ProfileContainer />
        </Profiles>
        {/* {showModal && <ProfileModal />} */}
        {/* <TutorialBtn /> */}
      </Wrapper>
    </HydrationBoundary>
  );
}
