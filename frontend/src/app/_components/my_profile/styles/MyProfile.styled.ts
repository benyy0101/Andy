import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
w-1/12
flex
`;

export const Profile = tw.button`
web:h-[55px]
web:w-[55px]

h-[40px]
w-[40px]

flex
justify-center
items-center
rounded-[100%]
cursor-pointer
border-4
border-orange
bg-[rgba(255,230,124,0.5)]
aspect-square
mr-5
web:mr-0
absolute
top-3
right-0
web:static
`;

export const ImageWrapper = tw.div`
flex
w-full
aspect-square
`;

// top-[30px]
// right-[40px]
// z-[100]

export const ProfileInfo = tw.div`
flex
flex-col
justify-between
bg-[rgba(255,255,255,0.6)]
rounded-[5px]
absolute
top-[55px]
right-[0px]
h-35
w-[125px]
pb-3
z-1

web:top-[70px]
web:right-[10px]
web:z-[20]
web:space-y-4
web:p-4
web:px-8
web:w-[180px]
`;

// bg-[rgba(255,230,124,0.3)]

export const Name = tw.div`
truncate 
...
font-bold
web:p-0
p-2
`;

export const Namespan = tw.span`
web:text-2xl
text-xl
`;

export const Child = tw.span`
text-sm
`;

export const Btn = tw.div`
mt-5
flex
flex-col
h-[70%]
justify-between
font-bold
text-white
`;

export const SquareContainer = tw.div`
flex
flex-col
web:gap-3
web:pl-0
gap-2
pl-5
justify-center
`;

export const Mypage = tw.button`
web:h-[35px]
web:text-[13px]
web:w-full
web:pt-2

text-[12px]
w-20
flex
justify-center
rounded-[5px]

py-1

bg-[#EEA241]
hover:bg-[rgba(255,230,124,0.9)]
hover:text-[#ED8B0E]
transition-all
`;

export const ProfileChange = tw.button`
web:h-[35px]
web:text-[13px]
web:w-full
web:pt-2

w-20
text-[12px]
flex
justify-center

rounded-[5px]
py-1
bg-[#EEA241]

hover:bg-[rgba(255,230,124,0.9)]
hover:text-[#ED8B0E]
transition-all
`;
