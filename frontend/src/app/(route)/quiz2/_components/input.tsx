"use client";

import React, { useState, useEffect } from "react";
import { Wrapper, Input } from "./styles/input.styled";

interface InputProps {
  onAnswerSubmit: (value: string) => void;
  // eslint-disable-next-line react/no-unused-prop-types
  onChange: (newData: string) => void;
  // eslint-disable-next-line react/no-unused-prop-types
  onSubmit: (isCorrect: boolean) => void;
  // eslint-disable-next-line react/no-unused-prop-types
  correctAnswer: string;
  // eslint-disable-next-line react/no-unused-prop-types
  inputValue: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function InputComponent({
  onAnswerSubmit,
  onChange,
  onSubmit,
  correctAnswer,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [userInputValue, setUserInputValue] = useState("");
  // const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    onChange(userInputValue);
  }, [userInputValue, onChange]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsValid(e.target.value !== "");
  };

  const handleSubmit = () => {
    const processedInputValue = userInputValue.replace(/\s+/g, "");
    onAnswerSubmit(processedInputValue); //  사용자 입력갑을 채점하는 데 사용
    const isCorrectAnswer = processedInputValue === correctAnswer; // 정답과 입력값 비교
    onSubmit(isCorrectAnswer);
    setUserInputValue("");
    setIsFocused(false);
    setIsValid(false);
  };

  // 입력받는 값의 상태 state를 정의해주고 그 값을 page에 넘겨서 null로 변경

  return (
    <Wrapper>
      <div className="flex web:flex-row flex-col web:items-end web:justify-end items-center justify-center web:space-x-4 space-y-6 w-full max-w-[1000px]">
        <Input>
          <input
            type="text"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setUserInputValue(e.target.value)}
            value={userInputValue}
            className={`
                    w-full
                    border-b
                    border-lightorange 
                    pb-2 
                    bg-transparent 
                    text-base 
                    text-orange focus:outline-none 
                    placeholder-lightorange
                    text-xl
                    ${isFocused || isValid ? "border-orange" : "border-lightorange"}`}
            // onChange={(e) => setInputValue(e.target.value)}
          />

          <div
            className={`
                    select-none
                    absolute 
                    text-lightorange
                    bottom-2 
                    transition-all 
                    duration-200 
                    ${isFocused || isValid ? "-translate-y-8 translate-x-1 text-orange bottom-10 text-2xl" : "text-lg"}`}
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
        <div className="web:w-1/4 web:max-w-[300px]">
          <button
            className="
                    transition-all
                    duration-200
                    bg-lightorange 
                    hover:bg-orange 
                    border-lightorange 
                    hover:border-orange
                    text-base
                    border-4 
                    text-white 
                    px-4
                    py-2
                    web:max-w-[300px]
                    rounded-md
                    w-full
                    "
            type="button"
            onClick={handleSubmit}
          >
            채점하기
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default InputComponent;
