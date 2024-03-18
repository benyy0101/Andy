"use client";

import Img from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Main_Character from "../../asset/_img/character.png";
import {
  Btn,
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

  const Info = () => {
    setShowInfo(true);
  };

  const hideInfo = () => {
    setShowInfo(false);
  };

  // const routetoMyPage = () => {
  //     router.push('마이페이지 url')
  // }

  const routetoProfileList = () => {
    router.push("/profile_list");
  };

  return (
    <Wrapper>
      <Profile onMouseEnter={Info} onMouseLeave={hideInfo}>
        <Img
          src={Main_Character.src}
          style={{ width: "25px", height: "auto", opacity: "80%" }}
          alt="main_character"
        />
      </Profile>
      {showInfo && (
        <ProfileInfo onMouseEnter={Info} onMouseLeave={hideInfo}>
          <Name>김태수</Name>
          <Btn>
            <Mypage>마이페이지</Mypage>
            <ProfileChange onClick={routetoProfileList}>
              프로필 전환{" "}
            </ProfileChange>
          </Btn>
        </ProfileInfo>
      )}
    </Wrapper>
  );
}
