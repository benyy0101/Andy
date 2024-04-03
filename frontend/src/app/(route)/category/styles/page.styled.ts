import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
flex-col
items-center
justify-start
space-y-4
web:space-y-8
flex-grow-[1]
`;

export const Title = tw.h1`
text-4xl
font-bold
`;

export const Explain = tw.h3`
text-xl
`;

export const Category = tw.div`
flex
flex-col
space-y-4
web:space-y-0
web:grid 
web:grid-cols-2
web:gap-10
`;

export const ImageContainer = tw.div`
  border
  border-lightorange
  rounded-lg
  bg-white
  flex
  flex-col
  items-center
  transition-all 
  ease-in-out 
  delay-20
  hover:-translate-y-1
  hover:scale-110
  hover:font-semibold
  duration-300
  web:max-w-2/10
  w-9/10
  h-fit
  space-y-2
  items-end
`;

export const Text = tw.span`
  p-4
  text-center
  text-xl
`;
