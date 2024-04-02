import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
h-svh
flex
flex-col
items-center
justify-start
gap-4
`;

export const Title = tw.h1`
text-3xl
font-extrabold
`;

export const Explain = tw.h3`
text-xl
font-bold
`;

export const ListCon1 = tw.div`
flex
flex-col
gap-8

`;

export const ListCon2 = tw.div`
flex
flex-col
gap-4
`;

export const ListDate = tw.div`
pl-4
text-left
text-2xl
`;

export const OnedayLists = tw.div`
flex
flex-col
web:grid 
web:grid-cols-2
gap-4
`;

export const List = tw.div`
px-8
py-4
relative
cursor-pointer
font-bold
container-md
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
