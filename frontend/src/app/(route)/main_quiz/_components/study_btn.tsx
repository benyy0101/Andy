'use client'
import tw from "tailwind-styled-components";
// import { useRouter } from "next/navigation"

export const Study_btn = () => {
    // const router = useRouter();

    // const routetoStudy = () => {
    //     router.push('틀린 문제 url')
    // }

    return (
        <Wrapper>
            {/* <Quiz_img onClick={routetoStudy}> */}
            <Quiz_img>
                틀린 문제
            </Quiz_img>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
px-20
py-10
justify-center
items-center
`

const Quiz_img = tw.button`
w-[250px]
h-[250px]
rounded-[100%]
bg-[rgba(155,205,160,0.7)]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-white
text-[25px]
hover:bg-[rgba(155,205,160,1)]
transition-all
`