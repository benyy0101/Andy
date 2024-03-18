"use client";

import React, { useState } from "react";
import Timer from "@/app/_components/timer";
import InputComponent from "./_components/input";
import Photo from "./_components/photo";
import { Wrapper, Wrapper2, Title, Explain } from "./styles/pages.styled";

function Quiz2Page() {
  // 가능하면 음악도 나오게 할 것
  // const audio = new Audio('audio_file.mp3');
  // audio.play();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);

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

  // 문제 결과를 보내는 훅
  //   const {
  //     data: ProblemResult,
  //     isLoading: isProblemResultLoading,
  //     isError: isProbelemResultError,
  //   } = useProblemResult("user", {
  //     question_category_seq: 0,
  //     mode: "A",
  //     questions: [
  //       {
  //         question_seq: 0,
  //         question_history_is_ok: true,
  //       },
  //     ],
  //   });

  return (
    <Wrapper>
      <Wrapper2>
        <progress className="w-full color-" value="63" max="100" />

        <div className="flex w-full items-center">
          <div className="flex-grow text-center">
            <Title>ROUND 1</Title>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <Explain>이건 무엇일까요?</Explain>
        <div className="justify-center">
          <Photo />
          <InputComponent />
        </div>
      </Wrapper2>

      {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
      {/* <button onClick={handleCorrectAnswer}>Show Correct Modal</button>
            <CorrectModal isOpen={isCorrectModalOpen} onClose={handleCloseCorrectModal} />
            
            <button onClick={handleWrongAnswer}>Show Wrong Modal</button>
            <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} /> */}
    </Wrapper>
  );
}

export default Quiz2Page;
