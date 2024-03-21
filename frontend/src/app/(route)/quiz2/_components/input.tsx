"use client";

import React, { useState } from "react";
import { Wrapper, Input } from "./styles/input.styled";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function InputComponent({ onAnswerSubmit }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsValid(e.target.value !== "");
    // 상위 컴포넌트의 함수를 호출해서 입력값을 전달해줌
    onAnswerSubmit(e.target.value);
  };

  return (
    <Wrapper>
      <div className="flex items-center space-x-4">
        <Input>
          <input
            type="text"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`w-72 
                    border-b 
                    border-lightorange 
                    pb-2 
                    pl-2 
                    bg-transparent 
                    text-base 
                    text-orange focus:outline-none 
                    placeholder-lightorange
                    ${isFocused || isValid ? "border-orange" : "border-lightorange"}`}
          />

          <div
            className={`absolute 
                    text-lightorange
                    left-2 
                    text-lg 
                    bottom-2 
                    transition-all 
                    duration-200 
                    ${isFocused || isValid ? "top-[-30px] text-orange text-base bottom-10 font-bold" : ""}`}
          >
            정답
          </div>

          <span
            className={`block 
                absolute 
                bottom-0 
                left-0 
                bg-orange
                h-1.5
                rounded 
                transition-all 
                duration-500 
                ${isFocused || isValid ? "w-full" : "w-0"}`}
          />
        </Input>
        <div>
          <button
            className="
                    mt-12
                    flex-shrink-0 
                    bg-lightorange 
                    hover:bg-orange 
                    border-lightorange 
                    hover:border-orange
                    text-base
                    border-4 
                    text-white 
                    py-4
                    px-3
                    rounded"
            type="button"
          >
            채점하기
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default InputComponent;
