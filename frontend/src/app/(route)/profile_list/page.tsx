import TutorialBtn from "@/app/_components/tutorial_btn/tutorialBtn";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getProfileList } from "@/app/api/profile";
import getQueryClient from "@/app/utils/queryClient";
import BackgroundSVG from "@/app/_components/background/Background";
import { Wrapper, Profiles } from "./styles/Page.styled";
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
      <Wrapper>
        <Profiles>
          <ProfileContainer />
        </Profiles>
        {/* {showModal && <ProfileModal />} */}
        <TutorialBtn />
      </Wrapper>
    </HydrationBoundary>
  );
}
