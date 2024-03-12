'use client'
import tw from "tailwind-styled-components";
import { useState } from 'react';
import Main_Character from "../../asset/_img/character.png"
import { useRouter } from "next/navigation"

export const My_profile = () => {
    const [showInfo, setShowInfo] = useState(false);
    const router = useRouter();

    const Info = () => {
        setShowInfo(true)
    }

    const hideInfo = () => {
        setShowInfo(false)
    }

    // const routetoMyPage = () => {
    //     router.push('마이페이지 url')
    // }

    const routetoProfileList = () => {
        router.push('/profile_list')
    }

    return (
        <Wrapper>
            <Profile onMouseEnter={Info} onMouseLeave={hideInfo}>
                <img src={Main_Character.src} style={{ width: '25px', height: 'auto', opacity: '80%' }}/>
            </Profile>
            {showInfo && <Profile_info onMouseEnter={Info} onMouseLeave={hideInfo}>
                <Name>김태수</Name>
                <Btn>
                    <Mypage>마이페이지</Mypage>
                    <ProfileChange onClick={routetoProfileList}>프로필 전환 </ProfileChange>
                </Btn>
            </Profile_info>}
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex
`

const Profile = tw.button`
flex
justify-center
items-center
align-center
rounded-[100%]
border-2
border-white
bg-[rgba(255,230,124,0.5)]
cursor-pointer
h-[60px]
w-[60px]
absolute
top-[30px]
right-[40px]
text-[9px]
z-[100]
`

const Profile_info = tw.div`
flex
flex-col
justify-between
h-[200px]
w-[200px]
rounded-[5px]
bg-[rgba(255,230,124,0.3)]
absolute
top-[20px]
right-[20px]
z-[20]
px-5
pt-8
pb-4
`

const Name = tw.div`
ml-[10%]
font-bold
`

const Btn = tw.div`
mt-5
flex
flex-col
h-[60%]
justify-between
`

const Mypage = tw.button`
rounded-[5px]
w-full
h-[40px]
py-1
bg-[rgba(255,230,124,0.5)]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
transition-all
`

const ProfileChange = tw.button`
rounded-[5px]
w-full
h-[40px]
py-1
bg-[rgba(255,230,124,0.5)]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
transition-all
`