import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
w-dvw
flex
items-center
justify-center

web:flex-row
web:gap-10
web:text-center

flex-col
gap-14
flex-wrap: nowrap;

flex-grow-[1]
`;

export const WholeWrapper = tw.div` 
flex
flex-col
items-center
cursor-pointer
hover:text-[green]
transition-all

space-y-4 
transition-all 
hover:scale-110
hover:-translate-y-10
`;

// 실질적인 퀴즈 circle container
export const QuizCircleContainer = tw.button`
flex
justify-center
items-center
w-32
h-32
rounded-[100%]
bg-[#ffe]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
font-bold
text-[17px]
hover:bg-[rgba(155,205,160,1)]
hover:text-[green]
transition-all

space-y-4 
transition-all 
hover:scale-110
hover:-translate-y-10

web:w-60
web:h-60

`;

export const IframeContainer = tw.div`
flex
justify-center
cursor-pointer

`;

export const QuizTitle = tw.div`
web:w-40
web:h-10
web:text-[25px]
web:mt-10
web:text
web:flex
web:justify-center


font-bold
text-[17px]
mt-2
hover:text-[green]
transition-all
`;
