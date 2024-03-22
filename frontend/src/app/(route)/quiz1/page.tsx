"use client";

import React, { useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import ProgressBar from "@/app/_components/ProgressBar";
import { useSendResultMutation } from "@/app/hooks/useGameA";
import Word1 from "./_components/word1";
import Camera from "./_components/camera";

import { Wrapper, Wrapper2, Title, Explain } from "./styles/page.styled";

const mockQuizData = {
  data: [
    {
      question_seq: 1,
      question_name: "사과",
      question_picture: "사과 이미지",
    },
    {
      question_seq: 2,
      question_name: "배",
      question_picture: "배 이미지",
    },
    {
      question_seq: 3,
      question_name: "포도",
      question_picture: "포도 이미지",
    },
    {
      question_seq: 4,
      question_name: "참외",
      question_picture: "참외 이미지",
    },
    {
      question_seq: 5,
      question_name: "키위",
      question_picture: "키위 이미지",
    },
  ],
};
// const mockQuizData = [{}];

function Quiz1Page() {
  const { data } = mockQuizData;

  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const numProblems: number = data.length;
  const [status, setStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState<boolean>();
  const { mutate } = useSendResultMutation();

  const handleCorrectAnswer = () => {
    setIsCorrectModalOpen(true);
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
  };

  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  const handleWrongAnswer = () => {
    setIsWrongModalOpen(true);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <ProgressBar max={numProblems} value={status.length} />
        <progress className="w-full " value="63" max="100" />
        <div className="flex w-full items-center">
          <div className="flex-grow text-center">
            <Title>ROUND 1</Title>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <Explain>단어에 해당하는 물체/대상을 찾아주세요!</Explain>
        <div className="flex justify-center gap-20">
          <Word1 />
          <Camera />
        </div>
      </Wrapper2>

      {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
      <button onClick={handleCorrectAnswer} type="button">
        Show Correct Modal
      </button>
      <CorrectModal
        isOpen={isCorrectModalOpen}
        onClose={handleCloseCorrectModal}
      />

      <button onClick={handleWrongAnswer} type="button">
        Show Wrong Modal
      </button>
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
    </Wrapper>
  );
}

export default Quiz1Page;
