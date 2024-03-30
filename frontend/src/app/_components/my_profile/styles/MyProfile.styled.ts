import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
web:p-0
web:mr-0

p-2
mr-1
flex
`;

export const Profile = tw.button`
web:h-[55px]
web:w-[55px]

h-[45px]
w-[45px]

flex
justify-center
items-center
align-center
rounded-[20px]
cursor-pointer
border-4
border-orange
bg-[rgba(255,230,124,0.5)]
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
top-[60px]
right-[20px]

web:top-[82px]
web:right-[25px]
web:z-[20]
web:space-y-4
web:p-4
web:px-8
`;

// bg-[rgba(255,230,124,0.3)]

export const Name = tw.div`
font-bold
`;

export const Namespan = tw.span`
text-2xl
`;

export const Child = tw.span`

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

export const Mypage = tw.button`
web:

rounded-[5px]

w-full
h-[35px]
py-1
bg-[#EEA241]
text-[13px]

hover:bg-[rgba(255,230,124,0.9)]
hover:text-[#ED8B0E]
transition-all
`;

export const ProfileChange = tw.button`
rounded-[5px]
w-full
h-[35px]
py-1
bg-[#EEA241]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
hover:text-[#ED8B0E]
transition-all
`;
