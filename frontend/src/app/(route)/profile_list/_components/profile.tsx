"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import storeProfile from "../../../_store/storeProfile";
import { ProfileWrapper, ProfileImg, ProfileName } from "../styles/Page.styled";

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
  const handleProfileClick = () => {
    setProfileInfo(profile);
    router.push("/main_quiz");
  };
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
          <Image
            src="https://picsum.photos/200"
            alt={profile.child_name}
            height={500}
            width={500}
            className="rounded-[100%] shadow-lg"
          />
        </motion.div>
      </ProfileImg>
      <ProfileName>{profile.child_name}</ProfileName>
    </ProfileWrapper>
  );
}
