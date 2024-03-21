"use client";

import { useState, useEffect } from "react"
import dayjs from "dayjs"
import Logo from "../../_components/logo/Logo"
import CalendarBox from "./_components/calendar";
import ProfileBox from "./_components/profile_box"
import ScoreBox from "./_components/score_box"
import { Wrapper, Content, Calendar, Info, Profile, Score} from "./styles/Page.styled"
import { useMypageByMonth } from "../../hooks/useMypage"

export default function MyPage() {
    const [dateSelect, setDateSelect] = useState<string>("");

    const fetchDate = (date: string) => {
        useEffect(() => {
            setDateSelect(date)
        })
    }

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
                        <ScoreBox dateSelect = {dateSelect}/>
                    </Score>
                </Info>
            </Content>
        </Wrapper>
    )
};