"use client";

import dayjs from "dayjs";
import storeProfile from "@/app/_store/storeProfile"
import { useMypageByDate } from "../../../hooks/useMypage"
import {
  ScoreWrapper,
  SelectDate,
  ScoreListScrollbar,
  Score1,
  TestNum,
  TestRes,
  NoTest,
  Num,
  Mode,
} from "../styles/Page.styled";

export default function ScoreBox({ dateSelect }: { dateSelect: string }) {
  const rdate = dateSelect;
  const selectyear = parseInt(rdate.substring(0, 4), 10);
  const selectmonth = parseInt(rdate.substring(4, 6), 10);
  const selectday = parseInt(rdate.substring(6, 8), 10);
  const { profile } = storeProfile();
  const childNum = profile.child_seq

  // 일별 기록 불러오기
  // 자식번호, 년, 월, 일
    const requestData = {
      "child_seq": Number(childNum),
      "year": selectyear,
      "month": selectmonth,
      "day": selectday,
    };

    // eslint-disable-next-line no-console
    // console.log(requestData)

  const { data } = useMypageByDate(requestData)
  
  // eslint-disable-next-line no-console
  // console.log(data)

  // data.exam_score?
  const testRes = data?.exam
  // eslint-disable-next-line no-console
  // console.log(testRes)

  return (
    <ScoreWrapper>
      <SelectDate>
        {selectmonth || dayjs().format("M")}월{" "}
        {selectday || dayjs().format("DD")}일
      </SelectDate>
      <ScoreListScrollbar>
        {testRes && testRes.length > 0 ? (
            testRes.map((result, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Score1 key={index}>
                <TestNum>
                  <Num>퀴즈 {index+1}</Num>
                  <Mode>{result.mode === 'A' ? '(단어 ➡️ 사진)' : '(사진 ➡️ 단어)'}</Mode>
                </TestNum>
                <TestRes>{`${Math.ceil(result.exam_score / 20)} / 5`}</TestRes>
              </Score1>
            ))
          ) : (
            <NoTest>퀴즈 기록이 없습니다.</NoTest>
          )}
      </ScoreListScrollbar>
    </ScoreWrapper>
  );
}
