"use client";

/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import storeProfile from "@/app/_store/storeProfile";
import { useMypageByMonth } from "../../../hooks/useMypage";

import {
  CalendarWrapper,
  StyledHeader,
  StyledBody,
  StyledBody1,
  Box,
  ThisMonth,
  PreviousIcon,
  NextIcon,
  DayImg,
  Text,
  RowWeek,
  Row1,
  Day,
} from "../styles/Page.styled";
import Stamp from "../../../asset/_img/smile_stamp.png";

export default function CalenderBox({
  clickdate,
}: {
  clickdate: (date: string) => void;
}) {
  // const dayjs = require('dayjs');
  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const { profile } = storeProfile();

  // const childnum = String(profile.child_seq)
  // const { data } = useGetProfile(childnum);

  // const childinfo = data;
  // eslint-disable-next-line no-console
  // console.log(childinfo)

  // 점수 목록으로 날짜 넘기기
  const dateselect = selectDate.format("YYYYMMDD");
  clickdate(dateselect);
  // console.log(selectDate.format('YYYYMMDD'))

  // 월별 기록 받아오기
  // 자식번호, 년, 월
  const childNum = profile.child_seq;
  const viewYear = viewDate.format("YYYY");
  const viewMonth = viewDate.format("MM");

  const requestYear = parseInt(viewYear, 10);
  const requestMonth = parseInt(viewMonth, 10);

  const requestData = {
    child_seq: Number(childNum),
    year: requestYear,
    month: requestMonth,
  };

  const { data, error } = useMypageByMonth(requestData);

  // eslint-disable-next-line no-console
  console.log(data);

  // 받아온 배열
  // const exams = data.exams
  // const SolveDay = exams.map((day) => {
  //   const viewDay = day.toString().padStart(2, "0");
  //   return `${viewYear}-${viewMonth}-${viewDay}`;
  // });

  const exams = [4, 6, 9, 15, 20, 25, 30, 31];
  const SolveDay = exams.map((day) => {
    const viewDay = day.toString().padStart(2, "0");
    return `${viewYear}-${viewMonth}-${viewDay}`;
  });

  // 년, 월 불러오기
  // useEffect(() => {
  //     const fetchMonth = async () => {
  //         try {
  //             const { data, error } = useMypageByMonth(requestData);
  //         } catch (error) {
  //         }
  //     };

  //     fetchMonth();
  // }, [requestData]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDayImage = (current: any) => {
    const isSolveDay = SolveDay.includes(current);
    const opacity = isSolveDay ? 1 : 0.3;
    return { image: Stamp, opacity };
  };

  const createCalendar = () => {
    const daysInMonth = viewDate.daysInMonth();
    const firstDayOfMonth = viewDate.startOf("month").day();
    const calender = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(<Box key={`${i}_${j}`} />);
        } else {
          const current = dayjs(viewDate).date(dayCounter);
          const isSelected =
            selectDate.format("YYYYMMDD") === current.format("YYYYMMDD")
              ? "selected"
              : "";
          const isToday =
            today.format("YYYYMMDD") === current.format("YYYYMMDD")
              ? "today"
              : "";
          const { image, opacity } = getDayImage(current.format("YYYY-MM-DD"));

          week.push(
            <Box key={`${i}_${j}`}>
              <Text
                className={`text ${isSelected} ${isToday}`}
                style={{
                  position: "static",
                  width: "65px",
                  height: "65px",
                  color: "#292929",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Day
                  onClick={() => {
                    setSelectDate(current);
                  }}
                >
                  {current.format("D")}
                  {image && (
                    <DayImg style={{ opacity }}>
                      <Image
                        src={image}
                        alt={`Day ${current.format("D")}`}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </DayImg>
                  )}
                </Day>
              </Text>
            </Box>,
          );
          dayCounter++;
        }
      }
      calender.push(<Row1 key={i}>{week}</Row1>);
    }
    return calender;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changegeMonth = (date: any, changeString: string) => {
    switch (changeString) {
      case "add":
        return setViewDate(viewDate.add(1, "month"));
      case "subtract":
        return setViewDate(viewDate.subtract(1, "month"));
      default:
        return date;
    }
  };

  return (
    <CalendarWrapper>
      <StyledHeader>
        <PreviousIcon onClick={() => changegeMonth(viewDate, "subtract")}>
          <ChevronLeftIcon style={{ color: "#EEA241" }} />
        </PreviousIcon>
        <ThisMonth>{viewDate.format("MM")}월</ThisMonth>
        <NextIcon onClick={() => changegeMonth(viewDate, "add")}>
          <ChevronRightIcon style={{ color: "#EEA241" }} />
        </NextIcon>
      </StyledHeader>
      <StyledBody>
        <StyledBody1>
          <RowWeek>
            <Box>
              <Text>일</Text>
            </Box>
            <Box>
              <Text>월</Text>
            </Box>
            <Box>
              <Text>화</Text>
            </Box>
            <Box>
              <Text>수</Text>
            </Box>
            <Box>
              <Text>목</Text>
            </Box>
            <Box>
              <Text>금</Text>
            </Box>
            <Box>
              <Text>토</Text>
            </Box>
          </RowWeek>
          <>{createCalendar()}</>
        </StyledBody1>
      </StyledBody>
    </CalendarWrapper>
  );
}
