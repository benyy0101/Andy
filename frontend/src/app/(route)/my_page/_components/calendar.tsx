"use client";

/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
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
  SolveCount,
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
  const childNum = profile.child_seq
  const viewYear = viewDate.format("YYYY");
  const viewMonth = viewDate.format("MM");

  // 점수 목록으로 날짜 넘기기
  const dateselect = selectDate.format("YYYYMMDD");
  clickdate(dateselect);
  // console.log(selectDate.format('YYYYMMDD'))

  const [requestData, setRequestData] = useState({
    "child_seq": Number(childNum),
    "year": Number(viewYear),
    "month": Number(viewMonth),
  });

  const { data, error } = useMypageByMonth(requestData);

  // eslint-disable-next-line no-console
  // console.log(requestData)

  // eslint-disable-next-line no-console
  // console.log(data)

  // 받아온 배열
  const exams = data?.exams
  const SolveDay = exams ? exams.map((day) => {
    const viewDay = day.toString().padStart(2, "0");
    return `${viewYear}-${viewMonth}-${viewDay}`;
  }) : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDayImage = (current: any) => {
    const isSolveDay = SolveDay.includes(current);
    const opacity = isSolveDay ? 1 : 0.3;
    return { image: Stamp, opacity };
  };

  const daysInMonth = viewDate.daysInMonth();

  const createCalendar = () => {
    // const daysInMonth = viewDate.daysInMonth();
    const firstDayOfMonth = viewDate.startOf("month").day();
    const calender = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(<Box key={`${i}_${j}`}>
            <div style={{ width: "55px", height: "55px" }} />
          </Box>);
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
                  width: "55px",
                  height: "55px",
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
                        // style={{ width: "35px", height: "35px" }}
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
    let updatedDate;
    switch (changeString) {
      case "add":
        updatedDate = viewDate.add(1, "month");
        break;
      case "subtract":
        updatedDate = viewDate.subtract(1, "month");
        break;
      default:
        updatedDate = date;
    }

    const updatedYear = updatedDate.format("YYYY");
    const updatedMonth = updatedDate.format("MM");

    // eslint-disable-next-line no-console
    console.log("changemonth")

    setViewDate(updatedDate);
    if (updatedYear !== viewYear || updatedMonth !== viewMonth) {
      setRequestData({
        "child_seq": Number(childNum),
        "year": Number(updatedYear),
        "month": Number(updatedMonth),
      });
    }
  };

  return (
    <CalendarWrapper>
      <StyledHeader>
      <SolveCount>
        <Image src={Stamp} alt="스탬프" width="20" height="20" />
        <div style={{marginLeft: "5px"}}>{`${exams?.length} / ${daysInMonth}`}</div>
      </SolveCount>
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
