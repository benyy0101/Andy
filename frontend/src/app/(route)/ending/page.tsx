"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
              00님의 점수는 80점입니다!!!
              <TalkballonSide />
            </Talkballon>
          </End>
        )}
      </div>
    </Wrapper>
  );
}
export default Ending;
