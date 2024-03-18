'use client'

// import { useRouter } from "next/navigation"
import { StudyWrapper, StudyImg } from "../styles/Page.styled";

export default function StudyBtn() {
    // const router = useRouter();

    // const routetoStudy = () => {
    //     router.push('틀린 문제 url')
    // }

    return (
        <StudyWrapper>
            {/* <Quiz_img onClick={routetoStudy}> */}
            <StudyImg>
                틀린 문제
            </StudyImg>
        </StudyWrapper>
    )
};