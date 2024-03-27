"use client";

import React, { useState, useEffect } from "react";
import { Wrapper, Input } from "./styles/input.styled";

<<<<<<< HEAD
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

function InputComponent({ onAnswerSubmit, onChange, onSubmit, correctAnswer, inputValue }: InputProps) {
=======
interface InputComponentProps {
  onSubmit: (answer: string) => void;
  onInputChange: (value: string) => void;
}

function InputComponent(props: InputComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onSubmit, onInputChange } = props;
>>>>>>> feature_front
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [userInputValue, setUserInputValue] = useState("");

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsValid(e.target.value !== "");
  };

<<<<<<< HEAD
  const handleSubmit = () => {
    onAnswerSubmit(userInputValue); //  사용자 입력갑을 채점하는 데 사용
    const isCorrectAnswer = userInputValue === correctAnswer; // 정답과 입력값 비교
    onSubmit(isCorrectAnswer);
    setUserInputValue("");
  }


  // 입력받는 값의 상태 state를 정의해주고 그 값을 page에 넘겨서 null로 변경
=======
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setInputValue(newValue);
  //   onInputChange(newValue);
  // };
>>>>>>> feature_front

  return (
    <Wrapper>
      <div className="flex items-center space-x-4">
        <Input>
          <input
            type="text"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setUserInputValue(e.target.value)}
            value={userInputValue}
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
            onChange={(e) => setInputValue(e.target.value)}
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
<<<<<<< HEAD
            onClick={handleSubmit}
=======
            value={inputValue}
            onClick={() => onSubmit(inputValue)}
>>>>>>> feature_front
          >
            채점하기
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default InputComponent;
