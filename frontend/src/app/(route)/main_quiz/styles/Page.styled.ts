import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
w-svw
flex
flex-col
web:flex-row
items-center
justify-center
space-y-20
web:space-y-0
web:space-x-20
flex-grow-[1]
`;

// 퀴즈1
export const Quiz1Wrapper = tw.div`
`;

export const Quiz1Img = tw.button`
w-40
h-40
web:w-60
web:h-60

flex
justify-center
items-center

rounded-[100%]
bg-[#ffe]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer

hover:bg-[rgba(155,205,160,1)]

transition-all
`;
// bg-[rgba(155,205,160,0.7)]

// 퀴즈2
export const Quiz2Wrapper = tw.div`
flex
flex-col
px-20
py-10
justify-center
items-center
`;

export const Quiz2Img = tw.button`
w-[250px]
h-[250px]
rounded-[100%]
bg-[rgba(155,205,160,0.7)]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-white
text-[25px]
hover:bg-[rgba(155,205,160,1)]
transition-all
`;

// 틀린 문제
export const StudyWrapper = tw.div`
flex
flex-col
px-20
py-10
justify-center
items-center
`;

export const StudyImg = tw.button`
w-[250px]
h-[250px]
rounded-[100%]
bg-[rgba(155,205,160,0.7)]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-white
text-[25px]
hover:bg-[rgba(155,205,160,1)]
transition-all
`;
