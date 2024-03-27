/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { SetStateAction, useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import AnswerModal from "@/app/_components/modal_answer";
import QuitModal from "@/app/_components/modal_quit";
import { Quit } from "@/app/_components/quit_btn/quit";
import { useSearchParams, useRouter } from "next/navigation";
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
      question_picture: "https://us.123rf.com/450wm/mblach/mblach1402/mblach140200030/25799171-%EC%82%AC%EA%B3%BC.jpg",
    },
    {
      question_seq: 2,
      question_name: "배",
      question_picture: "https://vrthumb.imagetoday.co.kr/2018/05/04/tip250t013093.jpg",
    },
    {
      question_seq: 3,
      question_name: "포도",
      question_picture: "https://img.segye.com/content/image/2017/08/30/20170830515039.jpg",
    },
    {
      question_seq: 4,
      question_name: "참외",
      question_picture: "https://t3.ftcdn.net/jpg/03/65/96/04/360_F_365960424_nTxaVl37phLHW9p6nyNegvVeEImXAJIn.jpg",
    },
    {
      question_seq: 5,
      question_name: "키위",
      question_picture: "https://img.hankyung.com/photo/202106/AA.26532434.1.jpg",
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
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [score, setScore] = useState<number>(0); // 맞힌 문제 개수 체크
  const router = useRouter()

  useEffect(() => {
    setInputValue("");
  }, [currentSeq]);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-shadow
  const handleInputSubmit = (inputValue: any) => {
    // eslint-disable-next-line no-console
    console.log('사용자가 친 입력값', inputValue);
    setInputValue('');
  };
  
  // const routeToEndingPage = () => {
  //   router.push('/ending')
  // };

  const routeToEndingPage = () => {
    router.push(`/ending?score=${score}`);
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
      setScore((prevScore) => prevScore + 1);
    }
    setIsTrue(stat);
  }
  
  // 모달 모음집
  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
    handleResetTimer();

    if (currentSeq === numProblems - 1) {
      routeToEndingPage();
    }
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
    // eslint-disable-next-line no-console
    // console.log("data 배열의 길이:", data.length);
    // eslint-disable-next-line no-console
    console.log("currentSeq의 값:", currentSeq);
    // eslint-disable-next-line no-console
    console.log('개수', score)
    // eslint-disable-next-line no-console
    console.log('이름', profile.child_name)
  }, [data, currentSeq]);


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
        console.log(data[currentSeq].question_name);
      } else {
        setIsWrongModalOpen(true);
      }
      // // eslint-disable-next-line no-console
      // console.log(profile);
    }
    setIsTrue(undefined);
  }, [isTrue]);

  const handleNextQuestion = () => {
    if (currentSeq < numProblems - 1) {
      setCurrentSeq(currentSeq + 1);
      setIsAnswerModalOpen(false);
      setInputValue("");
    } else {
      routeToEndingPage(); // 퀴즈가 끝나면 결과 페이지로 라우팅
    }
  };
  
  
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSeq]);

  const handleDataChange = (newData: string) => {
    setInputValue(newData);
  };


  return (
    <Wrapper>
      <PaddingWrapper>
      {/* <ProgressBar max={numProblems} value={status.length} /> */}
        
        <Title>라운드 {currentSeq + 1}</Title>

        <Explain>이것은 무엇일까요?</Explain>

        {/* 현재 라운드의 데이터가 있고  */}
        {currentSeq >= 0 && currentSeq < numProblems && data[currentSeq] && (
          <ImageTimeContainer>
            <PhotoContainer>
              <Photo question_picture={data[currentSeq].question_picture} />
            </PhotoContainer>
            
            <TimerContainer>
              <Timer reset={reset} />
            </TimerContainer>
          </ImageTimeContainer>
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
        {/* 게임 도중 나가기  */}
        <Quitbtn onClick={handleOpenQuitModal}>
          <Quit />
        </Quitbtn>
      
      </PaddingWrapper>
      {/* eslint-disable-next-line react/button-has-type */}
      <CorrectModal isOpen={isCorrectModalOpen} onClose={handleCloseCorrectModal} />
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      
        <AnswerModal
          isOpen={isAnswerModadlOpen} 
          onClose={handleCloseAnswerModal} 
          answer={data[currentSeq].question_name}
          onNext={handleNextQuestion}
        />
      
      <QuitModal isOpen={isQuitModalOpen} onClose={handleCloseQuitModal} />
    </Wrapper>
  );
}

export default Quiz2Page;

