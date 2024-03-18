import React from "react";
import { Wordbox } from "./styles/Word1.styled";

function Word1() {
    
    
    return (
        // 랜덤으로 카테고리에 해당하는 키워드 내기 (코드 추가할 예정)
        <Wordbox>연필</Wordbox>
        );
    };
    
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
