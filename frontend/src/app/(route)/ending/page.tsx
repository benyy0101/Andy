/* eslint-disable radix */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import storeProfile from "@/app/_store/storeProfile";
import Andy from "../../asset/_img/andy.png";
import Loading from "./_components/loading";

import {
  Wrapper,
  Title,
  Explain,
  End,
  Talkballon,
  TalkballonSide,
} from "./styles/page.styled";


function Ending() {
  const { profile } = storeProfile();
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/ban-types
  const score = searchParams.get('score') // 맞힌 문제 개수
  const scoreValue = score ? parseInt(score) : 0;
  const scoreResult = 20 * scoreValue; // 최종 점수
  

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoaded(true);
        // eslint-disable-next-line no-console
        console.log('개수', score) // 맞은 문제 체크

    }, 3000);

    return () => clearTimeout(timer);
  }, [score]);


  return (
    <Wrapper>
      <Title>게임 종료</Title>
      <Explain>문제를 몇 개 맞췄을까요?!</Explain>
      <br />
      <div>
        {/* `isLoaded` 상태에 따라 Loading 컴포넌트 또는 End 부분을 조건부 렌더링합니다. */}
        {!isLoaded ? (
          <div>
            <br />
            <br />
            <br />
            <Loading />
          </div>
        ) : (
          <End>
            <Image
              src={Andy}
              alt="앤디"
              className="w-20 h-auto animate-namespace-buzz"
            />
            {/* 사용자 닉네임과 맞춘 개수 체크 및 점수 더하는 통신 필요 */}
            <Talkballon>
              {profile.child_name} 님의 점수는 {scoreResult} 점입니다!!!
              <TalkballonSide />
            </Talkballon>
          </End>
        )}
      </div>
    </Wrapper>
  );
}
export default Ending;
