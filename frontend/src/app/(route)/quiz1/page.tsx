"use client";

import React, { Suspense, useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import ProgressBar from "@/app/_components/ProgressBar";
import { useGameResultMutation, useGamebyCategory } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
import { useSearchParams } from "next/navigation";
import Word1 from "./_components/word1";
import Camera from "./_components/camera";

import { Wrapper, Title, Explain } from "./styles/page.styled";

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz1Page() {
  // const { data } = mockQuizData;
  const { data } = useGamebyCategory(1);
  const { profile } = storeProfile();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const numProblems: number = data?.problems.length || 0;
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const { mutate } = useGameResultMutation();
  const [reset, setReset] = useState(false);
  const category = useSearchParams().get("category");

  const handleResetTimer = () => {
    setReset(true); // Set reset to true to trigger Timer component to reset
    setTimeout(() => {
      setReset(false); // Reset reset state after a short delay to allow Timer component to reset
    }, 100);
  };

  const handleIsTrue = (stat: boolean) => {
    setIsTrue(stat);
  };

  const handleCorrectAnswer = () => {
    setIsCorrectModalOpen(true);
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
    handleResetTimer();
  };

  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  const handleWrongAnswer = () => {
    setIsWrongModalOpen(true);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
    handleResetTimer();
  };

  useEffect(() => {
    if (isTrue !== undefined && data?.problems) {
      setStatus([
        ...status,
        {
          question_seq: data.problems[currentSeq].question_seq!,
          question_history_is_ok: isTrue,
        },
      ]);
      setCurrentSeq(currentSeq + 1);
      if (isTrue) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }
    setIsTrue(undefined);
  }, [isTrue]);

  useEffect(() => {
    if (currentSeq >= numProblems) {
      const req = {
        child_seq: profile.childSeq,
        question_category_seq: Number(category),
        mode: "A",
        questions: status,
      };
      mutate(req, {
        onSuccess: (newData) => {
          // eslint-disable-next-line no-console
          console.log(newData);
        },
      });
    }
  }, [currentSeq]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <ProgressBar max={numProblems} value={status.length} />
        <Title>라운드 {currentSeq + 1}</Title>
        <Timer reset={reset} />
        <Explain>단어에 해당하는 물체/대상을 찾아주세요!</Explain>
        <div className="flex justify-center gap-20">
          <Word1 />
          <Camera
            setIsTrue={handleIsTrue}
            input={data?.problems[currentSeq].question_name || ""}
          />
        </div>
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
    </Suspense>
  );
}

export default Quiz1Page;
