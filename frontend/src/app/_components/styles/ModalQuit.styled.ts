import tw from "tailwind-styled-components";

export const QuitBackground = tw.div`
fixed 
inset-0 
bg-black 
bg-opacity-50 
flex 
justify-center 
items-center
`;

export const QuitBox = tw.div`
bg-yellow
pt-10
pb-10
rounded-lg
text-center
w-96
h-102
relative
`;

export const Asking = tw.div`
font-extrabold
text-2xl
mb-8
`;

export const Warning = tw.p`
mt-2
mb-3
font-bold
text-m
`;

export const YesBtn = tw.button`
bg-orange 
text-white
pt-3
pb-3
pl-5
pr-5
rounded-xl
transition 
ease-in-out 
delay-20
hover:-translate-y-1 
hover:scale-110 
hover:bg-white hover:text-orange hover:font-extrabold
duration-300
`;

export const NoBtn = tw.button`
bg-lightorange
text-white
pt-3
pb-3
pl-5
pr-5
rounded-xl
transition 
ease-in-out 
delay-20
hover:-translate-y-1 
hover:scale-110 
hover:bg-white hover:text-lightorange hover:font-extrabold
duration-300
`;
