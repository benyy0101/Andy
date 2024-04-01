"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import storeProfile from "@/app/_store/storeProfile";
import { motion } from "framer-motion";
import {
  Mypage,
  Name,
  Profile,
  ProfileChange,
  ProfileInfo,
  Wrapper,
} from "./styles/MyProfile.styled";

export function MyProfile() {
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();
  const { profile } = storeProfile();
  const emptyImageUrl =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  const variants = {
    open: { opacity: 1, x: 1 },
    closed: { opacity: 0, x: 0 },
  };

  // const Info = () => {
  //   setShowInfo(true);
  // };

  // const hideInfo = () => {
  //   setShowInfo(false);
  // };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // const hideInfo = () => {
  //   setShowInfo(false);
  // };
  const childName = profile?.child_name;
  // const childPic = profile?.child_picture

  const routetoMyPage = () => {
    // router.push('/my_page');
    window.location.href = "/my_page";
  };

  const routetoProfileList = () => {
    router.push("/profile_list");
  };

  return (
    <Wrapper>
      {/* <Profile onClick={Info} onMouseLeave={hideInfo}> */}
      <Profile onClick={toggleInfo}>
        <Image
          src={profile.child_picture || emptyImageUrl}
          width="60"
          height="60"
          objectFit="cover"
          style={{ borderRadius: "100%" }}
          alt="프로필사진"
        />
      </Profile>
      <motion.div animate={showInfo ? "open" : "closed"} variants={variants}>
        <ProfileInfo>
          <Name>
            <span className="text-2xl">{childName}</span> <span>어린이</span>
          </Name>
          <Mypage onClick={routetoMyPage} className="text-white">
            마이페이지
          </Mypage>
          <ProfileChange onClick={routetoProfileList} className="text-white">
            프로필 전환{" "}
          </ProfileChange>
        </ProfileInfo>
      </motion.div>
    </Wrapper>
  );
}
