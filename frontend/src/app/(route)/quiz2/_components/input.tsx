"use client";

import React, { useState } from "react";
import tw from "tailwind-styled-components";

function InputComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsValid(e.target.value !== "");
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

          <label
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
          </label>

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

const Input = tw.div`
relative 
w-72 
ml-12 
mt-24
`;

const Wrapper = tw.div`
flex
items-center
justify-center
`;
