'use client'
import tw from "tailwind-styled-components";
import { Logo } from "../../_components/logo/Logo"
import { Calendar_box } from "./_components/calendar";
import { Profile_box } from "./_components/profile_box"
import { Score_box } from "./_components/score_box"

export default function my_page() {
    return (
        <Wrapper>
            <Logo />
            <Content>
                <Calendar>
                    <Calendar_box />
                </Calendar>
                <Info>
                    <Profile>
                        <Profile_box />
                    </Profile>
                    <Score>
                        <Score_box />
                    </Score>
                </Info>
            </Content>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
justify-center
items-center
h-[100vh]
m-[0 auto]
`

const Content = tw.div`
flex
h-[75%]
w-[80%]
justify-center
`

const Calendar = tw.div`
bg-[#ffffff]
text-black
rounded-[15px]
w-[65%]
flex
justify-center
items-center
shadow-md
`

const Info = tw.div`
text-black
w-[35%]
pl-4
flex
flex-col
justify-between
`

const Profile = tw.div`
bg-[#ffffff]
h-[40%]
p-8
rounded-[15px]
flex
items-center
justify-between
shadow-md
`

const Score = tw.div`
bg-[#EEA241]
text-black
h-[57%]
rounded-[15px]
p-8
pr-7
shadow-md
`