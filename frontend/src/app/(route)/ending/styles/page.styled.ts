import tw from "tailwind-styled-components";

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
font-bold
mb-10
`;

export const Explain = tw.h3`
text-xl
`;

export const End = tw.div`
flex 
gap-10 
w-auto 
h-auto 
m-10 
pt-20 
justify-center 
items-center
`;

export const Talkballon = tw.div`
relative 
text-center
item-center
bg-[#f0eb51] 
rounded-lg 
p-4 
max-w-xl
text-black
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
border-r-[#f0eb51] 
border-solid 
border-r-[20px] 
border-t-[10px] 
border-b-[10px] 
-ml-2.5 
mt-[-10px]
`;
