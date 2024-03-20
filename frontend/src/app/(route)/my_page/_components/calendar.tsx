'use client'

/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import dayjs from 'dayjs';
import { CalendarWrapper, StyledHeader, StyledBody, StyledBody1, 
    Box, ThisMonth, PreviousIcon, NextIcon, DayImg, Text, RowWeek, Row1, Day } from "../styles/Page.styled"
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useMypageByMonth } from "../../../hooks/useMypage"
import Stamp from "../../../asset/_img/smile_stamp.png";
import Image from "next/image"

export default function CalenderBox() {
    // day
    // const dayjs = require('dayjs');
    const today = dayjs();
    const [viewDate, setViewDate] = useState(dayjs());
    const [selectDate, setSelectDate] = useState(dayjs());

    // 자식번호, 년, 월 넘겨줘야 함
    // const child_num = ?
    const view_year = viewDate.format("YYYY")
    const view_month = viewDate.format("MM")
    // const { data, error } = useMypageByMonth(view_year, view_month)

    const Exam = [4, 6, 9, 15, 20, 25, 30, 31];
    const SolveDay = Exam.map(day => {
        const view_day = day.toString().padStart(2, '0'); // 한 자리 수인 경우 앞에 0을 추가하여 두 자리로 만듭니다.
        return `${view_year}-${view_month}-${view_day}`;
    });

    // useEffect(() => {
    //     const fetchMonth = async () => {
    //         try {
    //             const { data, error } = useMypageByMonth(view_year, view_month);
    //         } catch (error) {
    //         }
    //     };
    
    //     fetchMonth();
    // }, [view_year, view_month]);

    const getDayImage = (current: any) => {
        const isSolveDay = SolveDay.includes(current);
        const opacity = isSolveDay ? 1 : 0.3;
        return { image: Stamp, opacity };
    }

    const createCalendar = () => {
        const daysInMonth = viewDate.daysInMonth();
        const firstDayOfMonth = viewDate.startOf('month').day();
        const calender = [];

        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
                    week.push(<Box key={`${i}_${j}`} />);
                } else {
                    const current = dayjs(viewDate).date(dayCounter);
                    const isSelected = selectDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                    const isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
                    const { image, opacity } = getDayImage(current.format('YYYY-MM-DD'));
                    week.push(
                        <Box key={`${i}_${j}`}>
                            <div className={`text ${isSelected} ${isToday}`} style={{ position: "static", width: "65px", height: "65px", color: "#292929", display: "flex", justifyContent: "center" }}>
                                <Day onClick={() => { setSelectDate(current) }}>
                                    {current.format('D')}
                                    {image &&
                                        <DayImg style={{opacity: opacity}}>
                                            <Image src={image} alt={`Day ${current.format('D')}`} style={{ width: "40px", height: "40px" }} />
                                        </DayImg>
                                    }
                                </Day>
                            </div>
                        </Box>
                    );
                    dayCounter++;
                }
            }
            calender.push(<Row1 key={i}>{week}</Row1>);
        }
        return calender;
    }

    const changegeMonth = (date: any, changeString: string) => {
        switch (changeString) {
            case 'add':
                return setViewDate(viewDate.add(1, 'month'))
            case 'subtract':
                return setViewDate(viewDate.subtract(1, 'month'))
            default:
                return date;
        }
    }


  return (
    <CalendarWrapper>
      <StyledHeader>
            <PreviousIcon onClick={() => changegeMonth(viewDate, 'subtract')}><ChevronLeftIcon style={{color: "#EEA241"}}/></PreviousIcon>
            <ThisMonth>{viewDate.format("MM")}월</ThisMonth>
            <NextIcon onClick={() => changegeMonth(viewDate, 'add')}><ChevronRightIcon style={{color: "#EEA241"}}/></NextIcon>
      </StyledHeader>
      <StyledBody>
        <StyledBody1>
            <RowWeek>
                <Box><Text>일</Text></Box>
                <Box><Text>월</Text></Box>
                <Box><Text>화</Text></Box>
                <Box><Text>수</Text></Box>
                <Box><Text>목</Text></Box>
                <Box><Text>금</Text></Box>
                <Box><Text>토</Text></Box>
            </RowWeek>
            <div>
                {createCalendar()}
            </div>
        </StyledBody1>
      </StyledBody>
    </CalendarWrapper>
  )
}