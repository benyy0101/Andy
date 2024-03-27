import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
flex-col
items-center
justify-start
space-y-8
`;

export const Title = tw.h1`
text-4xl
font-bold
`;

export const Explain = tw.h3`
text-xl
`;

export const Category = tw.div`
grid 
grid-cols-2
gap-4
`;

export const ImageContainer = tw.div`
  flex
  flex-col
  items-center
  transition 
  ease-in-out 
  delay-20
  hover:-translate-y-1
  hover:scale-110
  hover:font-bold
  duration-300
`;

export const Text = tw.span`
  mt-2
  text-center
`;
