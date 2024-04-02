"use client";

import React, { Suspense, useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import ProgressBar from "@/app/_components/ProgressBar";
import { useGameResultMutation, useGamebyCategory } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
import { useRouter, useSearchParams } from "next/navigation";
import { Quit } from "@/app/_components/quit_btn/quit";
import QuitModal from "@/app/_components/modal_quit";
import BackgroundSVG from "@/app/_components/background/Background";
import Navigation from "@/app/_components/navigation/Navigation";
import Footer from "@/app/_components/footer/Footer";
import Word1 from "./word1";
import Camera from "./camera";
import { Wrapper, Title, Explain } from "../styles/page.styled";
import { Quitbtn } from "../../quiz2/styles/pages.styled";

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
  const [isReady, setIsReady] = useState<boolean>(false);
  const [count, setCount] = useState<number>(5);
  const [isCounting, setIsCounting] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);
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

  const handleOpenQuitModal = () => setIsQuitModalOpen(true);
  const handleCloseQuitModal = () => setIsQuitModalOpen(false);
  const handleOnQuitModal = () => {
    router.push("/category?mode=quiz1");
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

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    setIsCounting(true);
    if (!isReady && count > 0) {
      // Ensure count is greater than 0 before decrementing
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
    if (count === 0) setIsReady(true);
  }, [isReady, count]); // Include count in the dependency array

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BackgroundSVG />
      {!isReady ? (
        <div className="h-svh w-svw flex flex-col justify-center items-center space-y-10 web:h-screen">
          <Navigation />
          <div className="flex-grow-[1] flex flex-col justify-center items-center space-y-10">
            <div className="text-4xl">준비되었나요?</div>
            <div
              className={`text-8xl font-black ${isCounting && "animate-bounce"}`}
            >
              {count}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Wrapper>
          <Navigation />
          <div className="w-svw flex flex-col justify-center items-center space-y-4">
            <ProgressBar max={numProblems} value={status.length} />
            <div className="flex justify-between items-end w-11/12">
              {/* 게임 도중 나가기  */}
              <Quitbtn onClick={handleOpenQuitModal}>
                <Quit />
              </Quitbtn>
              {currentSeq < numProblems && (
                <div className="flex flex-col gap-4">
                  <Title>라운드 {currentSeq + 1}</Title>
                  <Explain>단어에 해당하는 물체/대상을 찾아주세요!</Explain>
                </div>
              )}
              <div className="w-1/6">
                <Timer reset={reset} handleWrong={handleWrongAnswer} />
              </div>
            </div>
            {/* <div className="flex justify-center items-end w-full px-10">
            {currentSeq < numProblems && <Title>라운드 {currentSeq + 1}</Title>}
            </div> */}

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
          </div>
          <Footer />
          {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
          <CorrectModal
            isOpen={isCorrectModalOpen}
            onClose={handleCloseCorrectModal}
          />
          <WrongModal
            isOpen={isWrongModalOpen}
            onClose={handleCloseWrongModal}
          />
          <QuitModal
            isOpen={isQuitModalOpen}
            onClose={handleCloseQuitModal}
            onQuit={handleOnQuitModal}
          />
        </Wrapper>
      )}
    </Suspense>
  );
}

export default Quiz1;
