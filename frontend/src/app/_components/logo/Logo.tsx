'use client'

import { useRouter } from "next/navigation";
import {Wrapper, Title} from './styles/Logo.styled';

function Logo() {
    const router = useRouter();

    const routetoHome = () => {
        router.push('/main')
    }

    return (
        <Wrapper>
            <Title onClick={routetoHome}>로고 이미지 삽입</Title>
        </Wrapper>
    )
}

export default Logo;

// const Wrapper = tw.div`
// flex
// justify-center
// w-[100vw]
// absolute
// top-[40px]
// `

