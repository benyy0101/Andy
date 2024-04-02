"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import storeProfile from "../../../_store/storeProfile";
import { ProfileWrapper, ProfileImg, ProfileName, DeleteBtn, ImageTest } from "../styles/Page.styled";
// import { useRemoveProfile } from "../../../hooks/useProfile"
import emptyImage from "../../../asset/_img/profile.png"

interface IProfile {
  profile: {
    child_seq: string;
    child_name: string;
    child_picture: string;
  };
}

interface DeleteModalprops {
  showDeleteModal: boolean;
  setShowDeleteModal: (show: boolean) => void;
  setSelectChild: (child_seq: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Profile(props: IProfile & DeleteModalprops) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { profile, showDeleteModal, setShowDeleteModal, setSelectChild } = props;
  const router = useRouter();
  const setProfileInfo = storeProfile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: { setProfileInfo: any }) => state.setProfileInfo,
  );

  // const { mutate } = useRemoveProfile();

  const handleProfileClick = () => {
    setProfileInfo(profile);
    router.push("/main_quiz");
  };

  const childNum = Number(profile.child_seq)

  const ProfileDelete = () => {
    setSelectChild(childNum);
    setShowDeleteModal(true);
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
            src={profile.child_picture || emptyImage}
            alt={profile.child_name}
            width="500"
            height="500"
            // fill
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
