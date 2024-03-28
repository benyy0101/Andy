'use client'

import React from "react";
import Image from "next/image";
import BackgroundSVG from "@/app/_components/background/Background"; 
// import { motion } from "framer-motion";
import Main_Character from "../../asset/_img/character.png";
import { KakaoLogin } from "./_components/KakaoLogin";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Wrapper, Character, LeftContainer, RightContainer, TitleContainer, Text1, Text2, Text3, KakaoContainer, AndyContainer } from "./styles/Page.styled";

export default function Main() {
  
  return (
    <>
      <BackgroundSVG /> 
      <Wrapper>
        <LeftContainer>

          <TitleContainer>
            <Text1>어른이 아니고</Text1>
            <Text2>ANDY</Text2>
            <Text3>유아를 위한 낱말학습 서비스</Text3>
          </TitleContainer>


        </LeftContainer>
        

        <RightContainer>
          <Character>
            <Image 
              alt="ANDY" 
              src={Main_Character} 
            />
          </Character>

          <KakaoContainer>
            <KakaoLogin />
          </KakaoContainer>

        </RightContainer>
      </Wrapper>
    </>
  
  );
}
