"use client";

import React, { Suspense, useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import ProgressBar from "@/app/_components/ProgressBar";
import { useGameResultMutation, useGamebyCategory } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
import { useRouter, useSearchParams } from "next/navigation";
import Word1 from "./word1";
import Camera from "./camera";

import { Wrapper, Title, Explain } from "../styles/page.styled";

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz1() {
  // const { data } = mockQuizData;

  const { profile } = storeProfile();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [numProblems, setNumProblems] = useState(0);
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const [score, setScore] = useState(0);
  const { mutate } = useGameResultMutation();
  const [reset, setReset] = useState(false);
  const category = Number(useSearchParams().get("category"));
  const { data } = useGamebyCategory(category);
  const router = useRouter();

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
    if (isTrue !== undefined && data) {
      setStatus([
        ...status,
        {
          question_seq: data[currentSeq].question_seq!,
          question_history_is_ok: isTrue,
        },
      ]);
      setCurrentSeq(currentSeq + 1);
      if (isTrue.toString() === "true") {
        setScore(score + 1);
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }
    setIsTrue(undefined);
  }, [isTrue]);

  useEffect(() => {
    if (
      currentSeq === numProblems &&
      status.length > 0 &&
      !isWrongModalOpen &&
      !isCorrectModalOpen
    ) {
      const req = {
        child_seq: profile.child_seq,
        question_category_seq: Number(category),
        mode: "A",
        questions: status,
      };
      mutate(req, {
        onSuccess: () => {
          router.push(`/ending?score=${score}`);
        },
      });
    }
  }, [isCorrectModalOpen, isWrongModalOpen]);

  useEffect(() => {
    if (data) {
      setNumProblems(data.length);
    }
  }, [data]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <ProgressBar max={numProblems} value={status.length} />
        <div className="flex justify-center items-end w-full px-10">
          {currentSeq < numProblems && <Title>라운드 {currentSeq + 1}</Title>}
        </div>
        <Explain>단어에 해당하는 물체/대상을 찾아주세요!</Explain>
        <Timer reset={reset} />
        <div className="w-screen web:w-fit flex flex-col justify-between items-center space-y-5 web:flex-row web:space-y-0 web:space-x-6">
          {data && currentSeq < numProblems && (
            <Word1 word={data[currentSeq].question_name || ""} />
          )}
          {data && currentSeq < numProblems && (
            <Camera
              setIsTrue={handleIsTrue}
              input={data[currentSeq].question_name || ""}
            />
          )}
        </div>
        {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
        <CorrectModal
          isOpen={isCorrectModalOpen}
          onClose={handleCloseCorrectModal}
        />
        <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
      </Wrapper>
    </Suspense>
  );
}

export default Quiz1;
