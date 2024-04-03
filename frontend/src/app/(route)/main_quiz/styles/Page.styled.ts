import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Wrapper = tw.div`
w-dvw
flex
items-center
justify-center

web:flex-row
web:gap-20
web:text-center

flex-col
gap-14

flex-grow-[1]
relative
web:static
`;

export const WholeWrapper = tw.div` 
flex
flex-col
items-center
cursor-pointer

hover:text-[green]
transition-all

space-y-8 
hover:scale-110
web:hover:-translate-y-10
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
web:text
web:flex
web:justify-center


font-bold
text-[17px]
hover:text-[green]
transition-all
`;

export const TutorialModalBg = tw.div`
absolute
top-0
left-0
w-full
h-[80vh]
web:h-full
flex
justify-center
web:items-center
z-[30]
`

// bg-[rgba(0,0,0,0.5)]

export const TutorialModalWrapper = tw.div`
rounded-[10px]
bg-[#fff]
h-[80%]
web:h-[85%]
w-[90%]
web:w-[75%]
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
right-0
text-[20px]
web:text-[25px]
cursor-pointer
`

export const ModalContent = tw.div`
w-full
flex
flex-col
items-center
h-[90%]
web:h-[90%]
web:pr-2
pb-10
web:pb-5
web:mb-3
overflow-y-scroll
overflow-x-hidden
`

export const ModalScrollbar = styled(ModalContent)`
&::-webkit-scrollbar {
    width: 8px;
}

&::-webkit-scrollbar-thumb {
    background-color: #EEA241;
    border-radius: 10px;
}

&::-webkit-scrollbar-track {
    background-color: #FFE67C;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}
`;