"use client";

import { SetStateAction, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import AnswerModal from "@/app/_components/modal_answer";
import InputComponent from "./_components/input";
import Photo from "./_components/photo";
import { Wrapper, Wrapper2, Title, Explain } from "./styles/pages.styled";

function Quiz2Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState('');
  const [isAnswerModadlOpen, setIsAnswerModalOpen] = useState(false);
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  // 임시 DB용으로 하나 넣어놓음
  const correctAnswer = "사과";
 
  const handleDataChange = (newData: SetStateAction<string>) => {
    setData(newData);
    // 입력된 데이터가 정답과 일치하는지 확인
    if(newData === correctAnswer) {
      setIsCorrectModalOpen(true);
    } else {
      setIsWrongModalOpen(true);
    }
  };

  // 모달 모음집
  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
    setIsAnswerModalOpen(true);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
    setIsAnswerModalOpen(true);
  };


  // ----------------------------------------------------------------------


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

  // ------------------------------------------------------------------------

  return (
    <Wrapper>
      <Wrapper2>
        <progress className="w-full color-" value="63" max="100" />

        <div className="flex w-full items-center">
          <div className="flex-grow text-center">
            <Title>문제 1</Title>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <Explain>이것은 무엇일까요?</Explain>
        <div className="justify-center">
          <Photo />
          <InputComponent onAnswerSubmit={handleDataChange} />
        </div>
      </Wrapper2>
      {/* eslint-disable-next-line react/button-has-type */}
      <CorrectModal isOpen={isCorrectModalOpen} onClose={handleCloseCorrectModal} />
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
      <AnswerModal isOpen={isAnswerModadlOpen} onClose={handleCloseAnswerModal} />
    </Wrapper>
  );
}

export default Quiz2Page;
