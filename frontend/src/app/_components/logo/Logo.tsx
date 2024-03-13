'use client'
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation"

export const Logo = () => {
    const router = useRouter();

    const routetoHome = () => {
        router.push('/main')
    }

    return (
        <Wrapper>
            <Title onClick={routetoHome}>로고</Title>
        </Wrapper>
    )
}

// const Wrapper = tw.div`
// flex
// justify-center
// w-[100vw]
// absolute
// top-[40px]
// `

const Wrapper = tw.div`
absolute
top-[40px]
left-0
right-0
flex
justify-center
`

const Title = tw.div`
font-bold
text-3xl
cursor-pointer
`