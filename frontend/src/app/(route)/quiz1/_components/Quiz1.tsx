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

// const mockQuizData = {
//   data: [
//     {
//       question_seq: 1,
//       question_name: "사과",
//       question_picture: "사과 이미지",
//     },
//     {
//       question_seq: 3,
//       question_name: "배",
//       question_picture: "배 이미지",
//     },
//     {
//       question_seq: 523,
//       question_name: "포도",
//       question_picture: "포도 이미지",
//     },
//     {
//       question_seq: 33,
//       question_name: "참외",
//       question_picture: "참외 이미지",
//     },
//     {
//       question_seq: 87,
//       question_name: "키위",
//       question_picture: "키위 이미지",
//     },
//   ],
// };

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz1() {
  // const { data } = mockQuizData;
  const { data } = useGamebyCategory(1);
  const { profile } = storeProfile();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [numProblems, setNumProblems] = useState(0);
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const [score, setScore] = useState(0);
  const { mutate } = useGameResultMutation();
  const [reset, setReset] = useState(false);
  const category = useSearchParams().get("category");
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
      // const req = {
      //   child_seq: profile.child_seq,
      //   question_category_seq: Number(category),
      //   mode: "A",
      //   questions: data.map((problem: any) => ({
      //     question_seq: problem.question_seq!,
      //     question_history_is_ok: false,
      //   })),
      // };
      // mutate(req, {
      //   onSuccess: (newData) => {
      //     router.push("/ending");
      //   },
      // });
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
        <div className="flex justify-between gap-20 flex-grow-[1] min-w-5/6">
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
