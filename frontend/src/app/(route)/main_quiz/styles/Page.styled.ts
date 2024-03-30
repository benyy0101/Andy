import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
w-dvw
flex
items-center
justify-center

web:flex-row
web:gap-10
web:pt-24
web:mt-20

flex-col
gap-5
flex-wrap: nowrap;
pt-10
mt-10

`;


// 실질적인 퀴즈 circle container
export const QuizCircleContainer = tw.button`
w-20
h-20
rounded-[100%]
bg-[#fff]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-[17px]
hover:bg-[rgba(155,205,160,1)]
hover:text-[white]
transition-all

web:w-40
web:h-40
web:text-[25px]
`;

