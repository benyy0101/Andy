'use client'

import { ScoreWrapper, SelectDate, ScoreListScrollbar, Score1, TestNum, TestRes } from "../styles/Page.styled"

export default function ScoreBox() {
    return (
        <ScoreWrapper>
            <SelectDate>3월 15일</SelectDate>
            <ScoreListScrollbar>
                <Score1>
                    <TestNum>퀴즈 1</TestNum>
                    <TestRes>4/5</TestRes>
                </Score1>
                <Score1>
                    <TestNum>퀴즈 2</TestNum>
                    <TestRes>2/5</TestRes>
                </Score1>
                <Score1>
                    <TestNum>퀴즈 3</TestNum>
                    <TestRes>3/5</TestRes>
                </Score1>
                <Score1>
                    <TestNum>퀴즈 4</TestNum>
                    <TestRes>4/5</TestRes>
                </Score1>
            </ScoreListScrollbar>
        </ScoreWrapper>
    )
};