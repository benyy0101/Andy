'use client'

import { ScoreWrapper, SelectDate, ScoreListScrollbar, Score1, TestNum, TestRes } from "../styles/Page.styled"
import dayjs from "dayjs";
import { useMypageByDate } from "../../../hooks/useMypage"

export default function ScoreBox({ dateSelect } : { dateSelect: string}) {
    const rdate = dateSelect
    const selectyear = parseInt(rdate.substring(0, 4), 10)
    const selectmonth = parseInt(rdate.substring(4, 6), 10)
    const selectday = parseInt(rdate.substring(6, 8), 10)

    // 일별 기록 불러오기
    // 자식번호, 년, 월, 일
    const requestData = {
        // "child_seq": ?,
        "year": selectyear,
        "month": selectmonth,
        "day": selectday,
    }

    // const { data, error } = useMypageByDate(requestData)

    // 날짜별 받아온 기록 저장?
    // data.exam_score?
    const test_num = []
    const test_res = [60, 70, 80, 90]

    return (
        <ScoreWrapper>
            <SelectDate>{selectmonth || dayjs().format('M')}월 {selectday || dayjs().format('DD')}일</SelectDate>
            <ScoreListScrollbar>
                {test_res.map((result, index) => (
                    <Score1 key={index}>
                        <TestNum>퀴즈</TestNum>
                        <TestRes>{result}</TestRes>
                    </Score1>
                ))}
            </ScoreListScrollbar>
        </ScoreWrapper>
    )
};