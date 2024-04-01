import tw from "tailwind-styled-components";

export const LoginBtn = tw.button`
web:w-[290px]
web:h-[80px]
web:left-[50%]
web:bottom-[15%]
web:border-[5px]

w-[195px]
h-[50px]
border-[4px]
bg-[#FEE500]
rounded-[12px]
flex
flex-row
justify-center
items-center
border-[orange]
shadow-md
transition-all duration-200 ease-in-out
transform-gpu
hover:scale-105
active:scale-100
`;

export const Symbol = tw.div`
color-[#000000]
web:w-[18%]
w-[12%]
`;

export const Label = tw.div`
text-black
opacity-[85%]
w-[65%]
font-bold
web:text-[22px]
text-[16px]
`;
