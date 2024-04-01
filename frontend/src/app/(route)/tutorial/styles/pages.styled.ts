import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Wrapper = tw.div`
h-screen
flex
flex-col
items-center
justify-start
`;
    
export const Wrapper2 = tw.div`
w-full
p-1
h-full
`;

export const Title = tw.h1`
mt-10
text-3xl
font-extrabold
mb-10
`;

export const Explain = tw.h3`
text-xl
font-bold
`;

export const BackBtn = tw.div`
fixed
left-[20px]
bottom-[20px]
cursor-pointer
`

export const TutorialContainerWrapper = tw.div`
flex
flex-col
items-center
w-full
h-full
pt-5
web:pr-2
pb-10
web:pb-5
web:mb-3
overflow-y-auto
`

export const ModalScrollbar = styled(TutorialContainerWrapper)`
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

export const TutorialWrapper = tw.div`
flex
flex-col
web:flex-row
flex-col-reverse
justify-center
items-center
web:w-[80%]
pt-20
pb-20
h-[100%]
`

export const Description = tw.div`
flex
flex-col
items-center
justify-center
w-full
web:h-[50%]
web:w-[50%]
`

export const DesWrapper = tw.div`
web:flex
web:flex-col
web:w-[70%]
`

export const AnimationImg = tw.div`
flex
justify-center
items-center
w-full
web:w-[40%]
`

export const Name = tw.div`
font-bold
text-[25px]
web:text-[30px]
mb-2
web:mr-auto
bg-[#FFE67C]
pl-3
pr-3
`

export const Des = tw.div`
text-lg
web:text-[25px]
leading-[1.3]
w-full
web:mr-auto
web:text-left
`