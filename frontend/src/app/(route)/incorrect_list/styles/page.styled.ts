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
font-extrabold
mb-10
`;

export const Explain = tw.h3`
text-xl
font-bold
`;

export const ListCon1 = tw.div`
m-10
`;

export const Scrollbar = tw.div`
h-64 
bg-red
`;

export const ListCon2 = tw.div`
mb-7

`;

export const ListDate = tw.div`
pl
text-left
font-bold
`;

export const OnedayLists = tw.div`
flex
grid 
grid-cols-2 
gap-8
`;

export const List = tw.div`
relative
cursor-pointer
font-bold
container-md
mt-3
pt-5
pb-5
pl-10
pr-10
rounded-lg
shadow-md
text-lg
overflow-hidden

transition 
ease-in-out 
delay-20
bg-[#ffff]/50 
hover:-translate-y-1 
hover:scale-110 
hover:bg-orange hover:text-white 
duration-300
`;

