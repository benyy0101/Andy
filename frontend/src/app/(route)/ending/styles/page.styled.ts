import tw from "tailwind-styled-components";

export const PageWrapper = tw.div`
h-dvh
w-dvw
`;

export const Wrapper = tw.div`
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
web:mt-5
web:text-3xl
web:mb-10

mt-5
text-xl
mb-5
font-bold
`;

export const Explain = tw.h3`
web:text-xl
text-l
`;

export const End = tw.div`
web:gap-10 
web:m-5
web:pt-10

flex 
justify-center 
items-center
m-5
pt-5
`;

export const AndyIcon = tw.div`
w-auto
h-auto
`;

export const Talkballon = tw.div`
relative
text-center
item-center
bg-orange
rounded-lg
text-white
shadow-md
max-w-xl
text-xs
p-2

web:p-10
web:text-xl
`;

export const TalkballonSide = tw.div`
absolute 
left-0 
top-1/2 
w-0 
h-0 
border-transparent 
border-t-transparent 
border-b-transparent 
border-r-orange 
border-solid 
border-r-[20px] 
border-t-[10px] 
border-b-[10px] 
-ml-2.5 
mt-[-10px]
`;

export const FinishContainer = tw.div`

`;

export const FinishButton = tw.button`
relative
rounded-lg
bg-orange
text-white
shadow-md

web:m-2
web:text-2xl
web:p-3

m-10
text-lg
p-3

`;