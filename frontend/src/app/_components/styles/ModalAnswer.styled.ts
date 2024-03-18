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
  bg-white
  p-8
  rounded-lg
  text-center
  `;

export const NextButton = tw.button`
    mt-4
    px-4
    py-2
    bg-blue-500
    text-white
    rounded
    hover:bg-blue-600
  `;
