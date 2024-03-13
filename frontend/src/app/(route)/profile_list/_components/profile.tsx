'use client'
import tw from "tailwind-styled-components";
// import { useRouter } from "next/navigation"

export const Profile = () => {
    // const router = useRouter();

    // const routetoProfileEdit = () => {
    //     router.push('/profile_edit')
    // }

    return (
        <Wrapper>
            <Profile_img />
            <Profile_name>박수민</Profile_name>
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
bg-[#FFE67C]
opacity-[70%]
shadow-md
cursor-pointer
`

const Profile_name = tw.button`
font-bold
mt-5
flex
justify-center
`