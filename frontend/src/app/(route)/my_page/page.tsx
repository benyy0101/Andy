"use client";

import { useState, useEffect } from "react";
import Logo from "../../_components/logo/Logo";
import CalendarBox from "./_components/calendar";
import ProfileBox from "./_components/profile_box";
import ScoreBox from "./_components/score_box";

import {
  Wrapper,
  Content,
  Calendar,
  Info,
  Profile,
  Score,
  // ProfileMobile,
  ProfileMobile
  // MobileProfile
  // ScoreWrapper1,
  // ProfileWrapper1
} from "./styles/Page.styled";

export default function MyPage() {
  const [dateSelect, setDateSelect] = useState<string>("");

  const FetchDate = (date: string) => {
    useEffect(() => {
      setDateSelect(date);
    }, [date]);
  };

  return (
    <>
      <Logo />
      <Wrapper>
        <Content>
          <ProfileMobile>
              <ProfileBox />
          </ProfileMobile>
          <Calendar>
            <CalendarBox clickdate={FetchDate} />
          </Calendar>
          <Info>
            <Profile>
              <ProfileBox />
            </Profile>
            <Score>
              <ScoreBox dateSelect={dateSelect} />
            </Score>
            {/* </ScoreWrapper1> */}
          </Info>
        </Content>
      </Wrapper>
    </>
  );
}
