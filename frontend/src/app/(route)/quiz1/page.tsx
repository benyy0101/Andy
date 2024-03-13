'use client'
import React, { useState } from "react";
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Timer from "@/app/_components/timer";
import Word1 from "./components/word1";
import Camera from "./components/camera";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";


const Quiz1Page: React.FC = () => {
    
    
    // 진행 상황 나타내는 진행바 (움직이는 바)
    const ProgressBar = styled.div.attrs({
        className: 'absolute left-0 top-0 h-10 rounded-full',
      })`
        height: 36px;
        border-radius: 30px;
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.3),
          rgba(255, 255, 255, 0.05)
        );
        transition: 0.4s linear;
        transition-property: width, background-color;
        &.progress-moved {
          width: 85%;
          background-color: #ef476f;
          animation: progressAnimation 6s;
        }
        @keyframes progressAnimation {
          0% {
            width: 0%;
            background-color: #f9bcca;
          }
          100% {
            width: 85%;
            background-color: #ef476f;
          }
        }
      `;
    
    // 가능하면 음악도 나오게 할 것
    // const audio = new Audio('audio_file.mp3');
    // audio.play();



    const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);

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
                {/* 진행바 */}
                {/* <div className="container">
                <ProgressBarWrapper>
                    <ProgressBar className="progress-moved" />
                </ProgressBarWrapper>
                </div> */}
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
            <button onClick={handleCorrectAnswer}>Show Correct Modal</button>
            <CorrectModal isOpen={isCorrectModalOpen} onClose={handleCloseCorrectModal} />
            
            <button onClick={handleWrongAnswer}>Show Wrong Modal</button>
            <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
            
        </Wrapper>
    );
};

const Wrapper = tw.div`
    h-screen
    flex
    flex-col
    items-center
    justify-start
    `;
    
    const Wrapper2 = tw.div`
    w-full
    p-1
    h-full
    `;
    
    const Title = tw.h1`
    mt-10
    text-3xl
    font-bold
    mb-10
    `;
    
    const Explain = tw.h3`
    text-xl
    `;
    
    // 진행바 전체 틀
    const ProgressBarWrapper = tw.div`
    relative 
    flex 
    justify-center 
    items-center 
    p-1 
    rounded-full 
    bg-black 
    bg-opacity-25
    h-10
    `;

export default Quiz1Page;

