import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
h-svh
flex
flex-col
items-center
justify-start
gap-8
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
`;

export const ListCon2 = tw.div`

`;

export const ListDate = tw.div`
text-left
font-bold
`;

export const OnedayLists = tw.div`
flex
grid 
grid-cols-2 
`;

export const List = tw.div`
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

