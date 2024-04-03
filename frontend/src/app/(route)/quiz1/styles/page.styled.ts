import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
relative
flex
flex-col
items-center
web:h-svh
`;

export const Title = tw.h1`
flex-grow-[1]
text-3xl
font-extrabold
`;

export const Explain = tw.h3`
flex
web:flex-row
flex-col
justify-center
items-center
gap-4
w-full
text-xl
`;
