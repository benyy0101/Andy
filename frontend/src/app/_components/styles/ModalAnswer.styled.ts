import tw from "tailwind-styled-components";

export const AnswerBackground = tw.div`
  fixed 
  top-0 
  left-0 
  w-full 
  h-full 
  flex items-center 
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
  text-6xl
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
  fixed
  right-5
  bottom-5
  `;
