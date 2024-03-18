'use client'
import React, { useState, useRef } from "react";
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Timer from "@/app/_components/timer";
import { CameraComponent } from "./_components/camera";
import { Word1 } from "./_components/word1";

import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";


const Quiz1Page: React.FC = () => {
    
    
    // 가능하면 음악도 나오게 할 것
    // const audio = new Audio('audio_file.mp3');
    // audio.play();

    // 카메라 컴포넌트
    const camera = useRef(null);
    const [image, setImage] = useState(null);

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
                    {/* <Camera /> */}

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
font-extrabold
mb-10
`;

const Explain = tw.h3`
text-xl
font-bold
`;
    

export default Quiz1Page;

