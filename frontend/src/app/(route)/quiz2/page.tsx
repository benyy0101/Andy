/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { SetStateAction, useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import AnswerModal from "@/app/_components/modal_answer";
import QuitModal from "@/app/_components/modal_quit";
import { Quit } from "@/app/_components/quit_btn/quit";
import { useRouter, useSearchParams } from "next/navigation";
import storeProfile from "@/app/_store/storeProfile";
import { useGameResultMutation } from "@/app/hooks/useGameA";
import InputComponent from "./_components/input";
import Photo from "./_components/photo";
import { Wrapper, PaddingWrapper, Title, Explain, Quitbtn, TimerContainer, PhotoContainer, ImageTimeContainer, Bar } from "./styles/pages.styled";

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

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz2Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = mockQuizData;
  const { profile } = storeProfile();
  const numProblems: number = data.length;
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const [reset, setReset] = useState(false);
  const category = useSearchParams().get("category");
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  const [isAnswerModadlOpen, setIsAnswerModalOpen] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { mutate } = useGameResultMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputSubmit = (inputValue: any) => {
    // eslint-disable-next-line no-console
    console.log('상위 컴포넌트에서 처리된 입력값', inputValue);
  };
  
  
  // 다음 라운드 넘어갈 때 타이머 리셋
  const handleResetTimer = () => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);
  };
  
  // 채점 후 맞는지 틀리는지에 따라 다르게
  const handleIsTrue = (stat: boolean) => {
    setIsTrue(stat);
  };
  
  // 모달 모음집
  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
    handleResetTimer();
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


  useEffect(() => {
    if (isTrue !== undefined) {
      setStatus([
        ...status,
        {
          question_seq: data[currentSeq].question_seq,
          question_history_is_ok: isTrue,
        },
      ]);
      setCurrentSeq(currentSeq + 1);
      if (isTrue) {
        setIsCorrectModalOpen(true);
      } else {
        setIsWrongModalOpen(true);
      }
      // eslint-disable-next-line no-console
      console.log(profile);
    }
    setIsTrue(undefined);
  }, [isTrue]);
  
  
  useEffect(() => {
    if (currentSeq >= numProblems) {
      const req = {
        // 전역 상태에 저장됨 
        child_seq: profile.child_seq,
        // 주소에서 가져오기
        question_category_seq: Number(category),
        mode: "B",
        questions: status,
      };
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      mutate(req, {
        onSuccess: (newData) => {
          // eslint-disable-next-line no-console
          console.log(newData);
        },
      });
    }
  }, [currentSeq]);
  





  const router = useRouter()
  // 다음 문제로 넘어가기 함수
  // const goToNextRound = () => {
    //   if (currentRoundIndex < totalQuiz) {
      //     // 라운드 인덱스 업데이트 (뮨재1 -> 문제2)
      //     setCurrentRoundIndex(currentRoundIndex + 1);
      //     // 다음 문제 정답 설정
      
      //     // 모달 상태 초기화
      //     setIsCorrectModalOpen(false);
      //     setIsWrongModalOpen(false);
  //     setIsAnswerModalOpen(false);
  //   } else {
  //     // 엔딩 페이지로 이동하긔
  //     router.push('/ending');
  //   }
  // }


  // // 임시 DB용으로 하나 넣어놓음
  // const correctAnswer = "사과";
 
  // const handleDataChange = (newData: SetStateAction<string>) => {
  //   setData(newData);
  //   // 입력된 데이터가 정답과 일치하는지 확인
  //   if(newData === correctAnswer) {
  //     setIsCorrectModalOpen(true);
  //   } else {
  //     setIsWrongModalOpen(true);
  //   }
  // };


  return (
    <Wrapper>
      <PaddingWrapper>
      {/* <ProgressBar max={numProblems} value={status.length} /> */}
        
        <Title>문제 1</Title>

        <Explain>이것은 무엇일까요?</Explain>

        <ImageTimeContainer>
          <PhotoContainer>
            <Photo question_picture="" />
          </PhotoContainer>
          
          <TimerContainer>
            <Timer />
          </TimerContainer>
        </ImageTimeContainer>

        <InputComponent
           />
        {/* 게임 도중 나가기  */}
        <Quitbtn onClick={handleOpenQuitModal}>
          <Quit />
        </Quitbtn>
      
      </PaddingWrapper>
      {/* eslint-disable-next-line react/button-has-type */}
      <CorrectModal isOpen={isCorrectModalOpen} onClose={handleCloseCorrectModal} />
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <AnswerModal isOpen={isAnswerModadlOpen} onClose={handleCloseAnswerModal} answer="" onNext={function (): void {
      } } />
      <QuitModal isOpen={isQuitModalOpen} onClose={handleCloseQuitModal} />
    </Wrapper>
  );
}

export default Quiz2Page;

