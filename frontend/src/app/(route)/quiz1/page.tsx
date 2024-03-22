"use client";

import React, { useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import Word1 from "./_components/word1";
import Camera from "./_components/camera";

import { Wrapper, Wrapper2, Title, Explain } from "./styles/page.styled";

const mockQuizData = [{}];

function Quiz1Page() {
  // 가능하면 음악도 나오게 할 것
  // const audio = new Audio('audio_file.mp3');
  // audio.play();

  // 카메라 컴포넌트
  // const camera = useRef(null);
  // const [image, setImage] = useState(null);

  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);

  // 카테고리 가져오는 커스텀 훅
  //   const {
  //     data: gameData,
  //     isLoading: isGameDataLoading,
  //     isError: isGameDataError,
  //   } = useGamebyCategory(0);

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
        <progress className="w-full color-" value="63" max="100" />

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
