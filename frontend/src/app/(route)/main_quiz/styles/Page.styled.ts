import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
w-dvw
flex
items-center
justify-center

web:flex-row
web:gap-10
web:pt-24
web:mt-0
web:text-center

flex-col
gap-14
flex-wrap: nowrap;
pt-10
mt-10

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
w-20
h-20
rounded-[100%]
bg-[#ffe]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-[17px]
hover:bg-[rgba(155,205,160,1)]
hover:text-[green]
transition-all

space-y-4 
transition-all 
hover:scale-110
hover:-translate-y-10

web:w-80
web:h-80

`;

export const IframeContainer = tw.div`
flex
justify-center
cursor-pointer
w-[100%]
h-[100%]

web:w-[100%]
web:h-[100%]
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

export const TutorialModalBg = tw.div`
absolute
w-full
h-full
flex
items-center
justify-center
`

// bg-[rgba(0,0,0,0.5)]

export const TutorialModalWrapper = tw.div`
rounded-[10px]
bg-[#fff]
h-[70%]
web:h-[80%]
w-[80%]
web:w-[70%]
shadow-md
p-5
`

export const ModalHeader = tw.div`
flex
font-bold
relative
h-[8%]
web:h-[10%]
justify-center
`

export const Title = tw.div`
text-[20px]
web:text-[30px]
`

export const Btn = tw.div`
absolute
top-0
web:top-[3px]
right-0
web:right-[3px]
text-[20px]
cursor-pointer
`

export const ModalContent = tw.div`
flex
flex-col
overflow-auto
h-[95%]
w-full
`
