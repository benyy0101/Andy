'use client'

import { useRouter } from "next/navigation"
import { Quiz2Wrapper, Quiz2Img } from "../styles/Page.styled";

export default function Quiz2Btn() {
    const router = useRouter();

    const routetoQuiz2 = () => {
        router.push('/quiz2')
    }

    return (
        <Quiz2Wrapper>
            <Quiz2Img onClick={routetoQuiz2}>
                퀴즈 2
            </Quiz2Img>
        </Quiz2Wrapper>
    )
};