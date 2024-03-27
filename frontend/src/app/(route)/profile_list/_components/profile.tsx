"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import storeProfile from "../../../_store/storeProfile";
import { ProfileWrapper, ProfileImg, ProfileName, DeleteBtn, ImageTest } from "../styles/Page.styled";
import { useRemoveProfile } from "../../../hooks/useProfile"

interface IProfile {
  profile: {
    child_seq: string;
    child_name: string;
    child_picture: string;
  };
}

export default function Profile(props: IProfile) {
  const { profile } = props;
  const router = useRouter();
  const setProfileInfo = storeProfile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { setProfileInfo: any }) => state.setProfileInfo,
  );

  const { mutate } = useRemoveProfile();

  const handleProfileClick = () => {
    setProfileInfo(profile);
    router.push("/main_quiz");
  };

  const ProfileDelete = () => {
    mutate(profile.child_seq, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: () => {
          // eslint-disable-next-line no-console
          window.location.reload();
      },
  });
  }

  return (
    <ProfileWrapper>
      <ProfileImg onClick={handleProfileClick}>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
        <ImageTest>
          <Image
            priority
            src={profile.child_picture}
            alt={profile.child_name}
            height="500"
            width="500"
            objectFit="cover"
            className="rounded-[100%] shadow-lg"
          />
        </ImageTest>
        </motion.div>
      </ProfileImg>
      <ProfileName>{profile.child_name}</ProfileName>
      <DeleteBtn onClick={ProfileDelete}>프로필 삭제</DeleteBtn>
      {/* <DeleteBtn>프로필 삭제</DeleteBtn> */}
    </ProfileWrapper>
  );
}
