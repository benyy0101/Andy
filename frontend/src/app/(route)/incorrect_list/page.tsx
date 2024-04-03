"use client";

import React, { useState, useEffect } from "react";
import { useWrongProblems } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import Footer from "@/app/_components/footer/Footer";

import {
  Wrapper,
  Title,
  Explain,
  ListCon1,
  ListCon2,
  ListDate,
  OnedayLists,
  List,
} from "./styles/page.styled";

function IncorrectListPage() {
  const { profile } = storeProfile();
  const date = new Date().toISOString().split("T")[0].split("-");
  const target = `${date[0]}-${date[1]}`;
  // const target = `${date.getFullYear()}-${date.getMonth()}`;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dates, setDates] = useState<string[]>([]);
  const { data } = useWrongProblems({
    child_seq: Number(profile.child_seq),
    month: target,
  });

  useEffect(() => {
    const temp: string[] = [];
    if (data) {
      data.problem.forEach((element) => {
        const temp2 = element.created_at?.slice(0, 3).join("-");
        if (!temp.includes(temp2)) {
          temp.push(temp2);
        }
      });
    }
    setDates(temp);
  }, [data]);

  return (
    <Wrapper>
      <BackgroundSVG />
      <Navigation />
      <div className="flex-grow-[1] flex flex-col space-y-8">
        <Title>틀린 문제 다시 풀기</Title>
        <Explain>다시 풀 문제를 골라보세요 !</Explain>

        {/* {dates.map((element)=>(
          <ListCon1>
          <istCon2>
            <ListDate>{element}</ListDate>
          </istCon2>
        </ListCon1>
        ))} */}
        <ListCon1>
          {/* 날짜 하나당 덩어리 */}
          <ListCon2>
            <ListDate>2024-04-03</ListDate>
            <OnedayLists>
              <List>찰칵퀴즈 (단어 ➡️ 사진)</List>
              <List>딸깍퀴즈 (사진 ➡️ 단어)</List>
              <List>찰칵퀴즈 (사진 ➡️ 단어)</List>
            </OnedayLists>
          </ListCon2>

          <ListCon2>
            <ListDate>2024-04-04</ListDate>
            <OnedayLists>
              <List>찰칵퀴즈 (단어 ➡️ 사진)</List>
              <List>딸깍퀴즈 (사진 ➡️ 단어)</List>
            </OnedayLists>
          </ListCon2>
        </ListCon1>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default IncorrectListPage;
