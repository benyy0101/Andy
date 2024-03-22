/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";
import Timer from "@/app/_components/timer";
import AnswerModal from "@/app/_components/modal_answer";
import { useRouter } from "next/navigation";
import InputComponent from "./_components/input";
import Photo from "./_components/photo";
import { Wrapper, Wrapper2, Title, Explain } from "./styles/pages.styled";

function Quiz2Page() {
  const [currentRound, setCurrentRound] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");

  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const router = useRouter();

  // 정답 채점 및 모달 처리 로직
  const checkAnswer = (userInput: string) => {
    // db에서 가져온 정답이라 가정하고 일단 진행시켜
    const correctAnswer = "정답";

    if (userInput === correctAnswer) {
      setIsCorrectModalOpen(true);
      setTimeout(() => {
        setIsCorrectModalOpen(false);
        setIsAnswerModalOpen(true);
      }, 3000); // 3초 모달 열기
    } else {
      setIsWrongModalOpen(true);
      setTimeout(() => {
        setIsWrongModalOpen(false);
        setIsAnswerModalOpen(true);
      }, 3000);
    }
  };

  // 다음 라운드로 넘어가긔
  // const goToNextRound = () => {
  //   setIsAnswerModalOpen(false);

  //   if (currentRound < 5) {
  //     setCurrentRound(currentRound + 1);
  //   } else {
  //     router.push('/ending')
  //   }
  // };

  const handleAnswer = () => {
    setIsAnswerModalOpen(true);
  };

  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
  };

  // const handleCorrectAnswer = () => {
  //   setIsCorrectModalOpen(true);
  // };

  // const handleCloseCorrectModal = () => {
  //   setIsCorrectModalOpen(false);
  // };

  // const handleWrongAnswer = () => {
  //   setIsWrongModalOpen(true);
  // };

  // const handleCloseWrongModal = () => {
  //   setIsWrongModalOpen(false);
  // };

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
            <Title>문제 1</Title>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <Explain>이건 무엇일까요?</Explain>
        <div className="justify-center">
          <Photo />
          <InputComponent
            onInputChange={setUserAnswer}
            onSubmit={() => checkAnswer(userAnswer)}
          />
        </div>
      </Wrapper2>

      {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
      {/* <button onClick={handleCorrectAnswer}>Show Answer Modal</button>
            <CorrectModal isOpen={isAnswerModalOpen} onClose={handleCloseCorrectModal} />
            
            <button onClick={handleWrongAnswer}>Show Wrong Modal</button>
            <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} /> */}

      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={handleAnswer}>Show Answer</button>
      <AnswerModal
        isOpen={isAnswerModalOpen}
        onClose={handleCloseAnswerModal}
      />
    </Wrapper>
  );
}

export default Quiz2Page;
