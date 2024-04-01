/* eslint-disable radix */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams , useRouter } from "next/navigation";
import storeProfile from "@/app/_store/storeProfile";
import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Andy from "../../asset/_img/andy.png";
import Loading from "./_components/loading";
import {
  PageWrapper,
  Wrapper,
  Title,
  Explain,
  End,
  AndyIcon,
  Talkballon,
  TalkballonSide,
  FinishButton,
  FinishContainer,
} from "./styles/page.styled";



function Ending() {
  const router = useRouter();
  const { profile } = storeProfile();
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/ban-types
  const score = searchParams.get('score') // 맞힌 문제 개수
  const scoreValue = score ? parseInt(score) : 0;
  const scoreResult = 20 * scoreValue; // 최종 점수
  const [showFireworks, setShowFireworks] = useState(false);

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    conductor.shoot();
  };
  

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoaded(true);
        // eslint-disable-next-line no-console
        console.log('개수', score) // 맞은 문제 체크

        if (scoreResult === 100) {
          setShowFireworks(true);
        }
    }, 3000);

    return () => clearTimeout(timer);
  }, [score]);

  const handleFinishButtonClick = () => {
    router.push('/main_quiz');
  };


  return (
    <PageWrapper>
      <BackgroundSVG />
      <Navigation />
      <Wrapper>
        <Title>게임 종료</Title>
        <Explain>문제를 몇 개 맞췄을까요?!</Explain>
        <br />
        <div>
          {!isLoaded ? (
            <div>
              <br />
              <br />
              <br />
              <Loading />
            </div>
          ) : (
            <End>
              <AndyIcon/>
              <style>
                {/* 모바일 */}
                {`
                  @media (max-width: 360px) {
                    .responsive-image {
                      width: 200px;
                      height: 200px;
                    }
                  }
                `}
              </style>
              {/* web */}
              <style>
                {`
                  @media (min-width: 361px) {
                    .responsive-image {
                      width: 300px;
                      height: 300px;
                    }
                  }
                `}
              </style>
                <Image
                  src={Andy}
                  alt="앤디"
                  className="responsive-image"
                />

              <Talkballon>
                <strong style={{ color: 'blue', fontWeight: 'bold' }}>{profile.child_name}</strong> 님의 점수는 <strong style={{ color: 'blue', fontWeight: 'extrabold' }}>{scoreResult}</strong> 점입니다!!
                <TalkballonSide />
              </Talkballon>
              <hr />
            </End>
          )}

          {showFireworks && (
            <Fireworks onInit={onInit} />
          )}

          <FinishContainer>
            {/* 종료버튼 */}
            <FinishButton  onClick={handleFinishButtonClick}>
              나가기
            </FinishButton>
          </FinishContainer>
          </div>
        </Wrapper>
    </PageWrapper>
  );
}
export default Ending;
