import React from "react";
import tw from "tailwind-styled-components";

export const Word1 = () => {
    const Wordbox = tw.div`
    flex
    items-center
    justify-center
    text-4xl
    font-bold
    mt-20
    bg-white
    rounded-md
    w-100
    h-80
    p-20
    `
    
    return (
        // 랜덤으로 카테고리에 해당하는 키워드 내기 (코드 추가할 예정)
        <Wordbox>연필</Wordbox>
    );
};

export default Word1;
