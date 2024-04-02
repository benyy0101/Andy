import tw from "tailwind-styled-components";

export const AnswerBackground = tw.div`
  fixed 
  top-0 
  left-0 
  w-full 
  h-full 
  flex 
  flex-col
  items-center 
  justify-center 
  bg-black
  bg-opacity-60
  `;

export const AnswerContent = tw.div`
  text-orange
  p-8
  rounded-lg
  text-center
  font-extrabold
  web:text-6xl
  text-4xl
  `;

export const NextButton = tw.button`
  mt-4
  px-4
  py-2
  bg-orange
  text-white
  rounded
  hover:bg-yellow
  hover:text-orange
  right-5
  bottom-5
  web:text-2xl
  text-md
  `;
