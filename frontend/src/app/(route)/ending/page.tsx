'use client'
import React, { useState, useEffect }  from "react";
import tw from 'tailwind-styled-components';

import Image from "next/image";
import Andy from "../../asset/_img/andy.png";

import Loading from "./_components/loading";


const Ending: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
    
        <Wrapper>
            <Title>게임 종료</Title>
            <Explain>문제를 몇 개 맞췄을까요?!</Explain>
            <br />
            <div>
                {/* `isLoaded` 상태에 따라 Loading 컴포넌트 또는 End 부분을 조건부 렌더링합니다. */}
                {!isLoaded ? (
                    <div>
                        <br />
                        <br />
                        <br />                      
                        <Loading />
                    </div>
                    
                ) : (
                    <End>
                        <Image src={Andy} alt="앤디" className="w-20 h-auto animate-namespace-buzz"></Image>
                        {/* 사용자 닉네임과 맞춘 개수 체크 및 점수 더하는 통신 필요 */}
                        <Talkballon>
                            00님의 점수는 80점입니다!!!
                        <TalkballonSide></TalkballonSide>
                        </Talkballon>
                    </End>
                )}
            </div>
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

const End = tw.div`
flex 
gap-10 
w-auto 
h-auto 
m-10 
pt-20 
justify-center 
items-center
`;

const Talkballon = tw.div`
relative 
text-center
item-center
bg-[#f0eb51] 
rounded-lg 
p-4 
max-w-xl
text-black
`;

const TalkballonSide = tw.div`
absolute 
left-0 
top-1/2 
w-0 
h-0 
border-transparent 
border-t-transparent 
border-b-transparent 
border-r-[#f0eb51] 
border-solid 
border-r-[20px] 
border-t-[10px] 
border-b-[10px] 
-ml-2.5 
mt-[-10px]
`;

export default Ending;

