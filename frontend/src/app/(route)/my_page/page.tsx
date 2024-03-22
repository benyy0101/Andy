"use client";

import { useState } from "react";
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
} from "./styles/Page.styled";

export default function MyPage() {
  const [dateSelect] = useState<string>("");

  const fetchDate = (date: string) => {
    // useEffect(() => {
    //   setDateSelect(date);
    // });
    // eslint-disable-next-line no-console
    console.log(date);
  };

  return (
    <Wrapper>
      <Logo />
      <Content>
        <Calendar>
          <CalendarBox clickdate={fetchDate} />
        </Calendar>
        <Info>
          <Profile>
            <ProfileBox />
          </Profile>
          <Score>
            <ScoreBox dateSelect={dateSelect} />
          </Score>
        </Info>
      </Content>
    </Wrapper>
  );
}
