'use client'

import Logo from "../../_components/logo/Logo"
import CalendarBox from "./_components/calendar";
import ProfileBox from "./_components/profile_box"
import ScoreBox from "./_components/score_box"
import { Wrapper, Content, Calendar, Info, Profile, Score} from "./styles/Page.styled"

export default function MyPage() {
    return (
        <Wrapper>
            <Logo />
            <Content>
                <Calendar>
                    <CalendarBox />
                </Calendar>
                <Info>
                    <Profile>
                        <ProfileBox />
                    </Profile>
                    <Score>
                        <ScoreBox />
                    </Score>
                </Info>
            </Content>
        </Wrapper>
    )
};