"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation"
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
  RetryBtn,
  ScoreHeader
} from "../styles/Page.styled";

export default function ScoreBox({ dateSelect }: { dateSelect: string }) {
  const rdate = dateSelect;
  const selectyear = parseInt(rdate.substring(0, 4), 10);
  const selectmonth = parseInt(rdate.substring(4, 6), 10);
  const selectday = parseInt(rdate.substring(6, 8), 10);
  const { profile } = storeProfile();
  const childNum = profile.child_seq
  const router = useRouter();

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
  const testRes = data?.exam

  const routetoRetry = () => {
    router.push('/incorrect_list')
  }

  return (
    <ScoreWrapper>
      <ScoreHeader>
        <SelectDate>
          {selectmonth || dayjs().format("M")}월{" "}
          {selectday || dayjs().format("DD")}일
        </SelectDate>
        {testRes && testRes.length > 0 && <RetryBtn onClick={routetoRetry}>문제 다시 풀기</RetryBtn>}
      </ScoreHeader>
      <ScoreListScrollbar>
        {testRes && testRes.length > 0 ? (
            testRes.map((result, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Score1 key={index}>
                <TestNum>
                  <Num>{result.mode === 'A' ? '찰칵 퀴즈 📸' : '딸깍 퀴즈 ⌨️'}</Num>
                  <Mode>{result.question_category_name}</Mode>
                </TestNum>
                <TestRes>{`${result.exam_score} / 5`}</TestRes>
              </Score1>
            ))
          ) : (
            <NoTest>퀴즈 기록이 없습니다.</NoTest>
          )}
      </ScoreListScrollbar>
    </ScoreWrapper>
  );
}
