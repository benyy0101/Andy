/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import AnswerModal from "@/app/_components/modal_answer";
import QuitModal from "@/app/_components/modal_quit";
import { Quit } from "@/app/_components/quit_btn/quit";
import { useSearchParams, useRouter } from "next/navigation";
import storeProfile from "@/app/_store/storeProfile";
import { useGameResultMutation, useGamebyCategory } from "@/app/hooks/useGameA";
import ProgressBar from "@/app/_components/ProgressBar";
import { animate } from "framer-motion";
import BackgroundSVG from "@/app/_components/background/Background";
import Navigation from "@/app/_components/navigation/Navigation";
import InputComponent from "./_components/input";
import Photo from "./_components/photo";
import {
  Wrapper,
  Title,
  Explain,
  Quitbtn,
  TimerContainer,
  ImageTimeContainer,
  Bar,
} from "./styles/pages.styled";

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz2Page() {
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const [reset, setReset] = useState(false);
  const category = Number(useSearchParams().get("category"));
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  const [isAnswerModadlOpen, setIsAnswerModalOpen] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { mutate } = useGameResultMutation();
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [score, setScore] = useState<number>(0); // 맞힌 문제 개수 체크
  const [isReady, setIsReady] = useState<boolean>(false);
  const [count, setCount] = useState<number>(5);
  const [isCounting, setIsCounting] = useState(false);
  const router = useRouter();
  const { data } = useGamebyCategory(category);
  const [numProblems, setNumProblems] = useState(0);
  const { profile } = storeProfile();
  useEffect(() => {
    setInputValue("");
  }, [currentSeq]);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-shadow
  const handleInputSubmit = (inputValue: any) => {
    // eslint-disable-next-line no-console
    console.log("사용자가 친 입력값", inputValue);
    setInputValue("");
  };

  // 다음 라운드 넘어갈 때 타이머 리셋
  const handleResetTimer = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);
  };

  // 채점 후 맞는지 틀리는지에 따라 다르게
  // const handleIsTrue = (stat: boolean) => {
  //   setIsTrue(stat);
  // };

  const handleIsTrue = (stat: boolean) => {
    if (stat) {
      setScore((prevScore: any) => prevScore + 1);
    }
    setIsTrue(stat);
  };

  // 모달 모음집
  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
    handleResetTimer();

    // if (currentSeq === numProblems - 1) {
    //   routeToEndingPage();
    // }
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
    setIsAnswerModalOpen(true);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
    setIsAnswerModalOpen(true);
  };

  const handleOpenQuitModal = () => setIsQuitModalOpen(true);
  const handleCloseQuitModal = () => setIsQuitModalOpen(false);
  const handleOnQuitModal = () => {
    router.push("/category?mode=quiz2");
  };

  // eslint-disable-next-line no-console
  // console.log(profile.child_name);

  useEffect(() => {
    if (isTrue !== undefined) {
      setStatus([
        ...status,
        {
          question_seq: data[currentSeq].question_seq,
          question_history_is_ok: isTrue,
        },
      ]);
      if (isTrue) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIsCorrectModalOpen(true);
        // eslint-disable-next-line no-console
        // console.log(data[currentSeq].question_nam);
      } else {
        setIsWrongModalOpen(true);
      }
      // // eslint-disable-next-line no-console
      // console.log(profile);
    }
    setIsTrue(undefined);
  }, [isTrue]);

  const handleNextQuestion = () => {
    if (currentSeq < numProblems) {
      setCurrentSeq(currentSeq + 1);
      setIsAnswerModalOpen(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (numProblems > 0 && currentSeq === numProblems && !isAnswerModadlOpen) {
      const req = {
        child_seq: profile.child_seq,
        question_category_seq: Number(category),
        mode: "B",
        questions: status,
      };
      mutate(req, {
        onSuccess: () => {
          router.push(`/ending?score=${score}`);
        },
      });
    }
  }, [isAnswerModadlOpen]);

  useEffect(() => {
    if (data) {
      setNumProblems(data.length);
    }
  }, [data]);

  const handleDataChange = (newData: string) => {
    setInputValue(newData);
  };

  return (
    <Wrapper>
      <BackgroundSVG />
      <Navigation />
      {!isReady ? (
        <div className="h-svh w-svw flex flex-col justify-center items-center space-y-10">
          <div className="text-4xl">준비되었나요?</div>
          <div
            className={`text-8xl font-black ${isCounting && "animate-bounce"}`}
          >
            {count}
          </div>
        </div>
      ) : (
        <>
          <ProgressBar max={numProblems} value={status.length} />
          <div className="flex justify-between items-end w-11/12">
            {/* 게임 도중 나가기  */}
            <Quitbtn onClick={handleOpenQuitModal}>
              <Quit />
            </Quitbtn>
            {currentSeq < numProblems && <Title>라운드 {currentSeq + 1}</Title>}
            <div className="w-1/6" />
          </div>
          {currentSeq < numProblems && (
            <>
              <Explain>이것은 무엇일까요? 정답을 적어주세요!</Explain>
              <Timer
                reset={reset}
                handleWrong={() => setIsWrongModalOpen(true)}
              />
            </>
          )}
          {/* 현재 라운드의 데이터가 있고  */}
          {currentSeq >= 0 && currentSeq < numProblems && data[currentSeq] && (
            <Photo question_picture={data[currentSeq].question_picture} />
          )}

          {currentSeq >= 0 && currentSeq < numProblems && data[currentSeq] && (
            <InputComponent
              onAnswerSubmit={handleInputSubmit}
              onChange={handleDataChange}
              onSubmit={handleIsTrue}
              correctAnswer={data[currentSeq].question_name}
              inputValue={inputValue}
            />
          )}
        </>
      )}

      {/* eslint-disable-next-line react/button-has-type */}
      <CorrectModal
        isOpen={isCorrectModalOpen}
        onClose={handleCloseCorrectModal}
      />
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
      {/* eslint-disable-next-line react/jsx-no-bind */}

      {data && currentSeq < numProblems && (
        <AnswerModal
          isOpen={isAnswerModadlOpen}
          onClose={handleCloseAnswerModal}
          answer={data[currentSeq].question_name}
          onNext={handleNextQuestion}
        />
      )}

      <QuitModal
        isOpen={isQuitModalOpen}
        onClose={handleCloseQuitModal}
        onQuit={handleOnQuitModal}
      />
    </Wrapper>
  );
}

export default Quiz2Page;
