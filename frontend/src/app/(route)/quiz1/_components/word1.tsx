import React from "react";
import { Wordbox } from "./styles/word1.styled";

interface Iword1 {
  word: string;
}
function Word1(props: Iword1) {
  const { word } = props;
  return (
    // 랜덤으로 카테고리에 해당하는 키워드 내기 (코드 추가할 예정)
    <Wordbox>{word}</Wordbox>
  );
}

export default Word1;
