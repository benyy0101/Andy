'use client'

import { useRouter } from "next/navigation"
import { Quiz1Wrapper, Quiz1Img } from "../styles/Page.styled";

export default function Quiz1Btn() {
    const router = useRouter();

    const routetoQuiz1 = () => {
        router.push('/quiz1')
    }

    return (
        <Quiz1Wrapper>
            <Quiz1Img onClick={routetoQuiz1}>
                퀴즈 1
            </Quiz1Img>
        </Quiz1Wrapper>
    )
};