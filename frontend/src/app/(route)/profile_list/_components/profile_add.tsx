'use client'
import tw from "tailwind-styled-components";
// import plus_icon from "../../assets/img/plus_icon.png"
import { useRouter } from "next/navigation"

export const Profile_add = () => {
    const router = useRouter();

    const routetoProfileAdd = () => {
        router.push('/profile_add')
    }

    return (
        <Wrapper>
            <Profile_img onClick={routetoProfileAdd}>
                {/* <img src={plus_icon}></img> */} +
            </Profile_img>
            <Profile_name>프로필 추가</Profile_name>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
px-10
py-10
justify-center
items-center
`

const Profile_img = tw.button`
w-[200px]
h-[200px]
rounded-[100%]
bg-[#9BCDA0]
opacity-[40%]
cursor-pointer
shadow-md
hover:p-12
transition-all
text-[30px]
`

const Profile_name = tw.button`
font-bold
mt-5
flex
justify-center
`