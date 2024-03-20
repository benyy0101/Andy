
import React from "react";
import Image from "next/image";
import logo from "@/app/asset/_img/andy.png";
import { Wrapper, Wrapper2, Title, Explain } from "./styles/pages.styled";



function TutorialPage() {


    return(
        <Wrapper>
            <Wrapper2>
                <Title>튜토리얼 페이지</Title>
                <Explain>앤디 이용 가이드가자</Explain>
                <Image src={logo} alt="앤디" />
            </Wrapper2>
        </Wrapper>
    );
}

export default TutorialPage;