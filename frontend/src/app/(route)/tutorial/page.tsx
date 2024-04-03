'use client'

import React from "react";
// import Image from "next/image";
// import logo from "@/app/asset/_img/andy.png";
import { useRouter } from "next/navigation";
import Logo from "@/app/_components/logo/Logo";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { Wrapper, Wrapper2, BackBtn} from "./styles/pages.styled";
import TutorialContainer from "./_components/TutorialContainer";

function TutorialPage() {
    const router = useRouter();

    const routetoQuizList = () => {
        router.push('/main_quiz')
    }

    return(
        <Wrapper>
            <Logo />
            <Wrapper2>
                <TutorialContainer />
                {/* <Image src={logo} alt="앤디" /> */}
            </Wrapper2>
            <BackBtn onClick = {routetoQuizList}>
                <ArrowLeftStartOnRectangleIcon style={{ width: "30px", height: "30px" }} />
            </BackBtn>
        </Wrapper>
    );
}

export default TutorialPage;