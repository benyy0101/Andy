"use client";

import React from "react";
import { useWrongProblems } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
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
  const { data } = useWrongProblems({
    child_seq: Number(profile.child_seq),
    month: target,
  });
  // eslint-disable-next-line no-console
  console.log(data);
  // useEffect(() => {
  //   data.forEach((element) => {});
  // }, [data]);
  // console.log(data);
  return (
    <Wrapper>
      <Title>틀린 문제 다시 풀기</Title>
      <Explain>다시 풀 문제를 골라보세요 !</Explain>
      <ListCon1>
        {/* 날짜 하나당 덩어리 */}
        <ListCon2>
          <ListDate>2024-02-29</ListDate>
          <OnedayLists>
            <List>퀴즈1 (단어 ➡️ 사진)</List>
            <List>퀴즈2 (사진 ➡️ 단어)</List>
            <List>퀴즈2 (사진 ➡️ 단어)</List>
          </OnedayLists>
        </ListCon2>

        <ListCon2>
          <ListDate>2024-03-11</ListDate>
          <OnedayLists>
            <List>퀴즈1 (단어 ➡️ 사진)</List>
            <List>퀴즈2 (사진 ➡️ 단어)</List>
          </OnedayLists>
        </ListCon2>
      </ListCon1>
    </Wrapper>
  );
}

export default IncorrectListPage;
