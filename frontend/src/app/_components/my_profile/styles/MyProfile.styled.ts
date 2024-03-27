import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
`;

export const Profile = tw.button`
flex
justify-center
items-center
align-center
rounded-[100%]
border-2
border-white
bg-[rgba(255,230,124,0.5)]
cursor-pointer
h-[60px]
w-[60px]
top-[30px]
right-[40px]
text-[9px]
z-[100]
`;

export const ProfileInfo = tw.div`
flex
flex-col
justify-between
bg-[#fff]
rounded-[5px]
absolute
top-[100px]
right-[40px]
z-[20]
space-y-4
p-4
px-8
`;

// bg-[rgba(255,230,124,0.3)]

export const Name = tw.div`
font-bold
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
rounded-[5px]
w-full
h-[35px]
py-1
bg-[#EEA241]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
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
transition-all
`;
