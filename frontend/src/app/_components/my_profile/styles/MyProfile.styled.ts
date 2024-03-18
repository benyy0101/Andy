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
absolute
top-[30px]
right-[40px]
text-[9px]
z-[100]
`;

export const ProfileInfo = tw.div`
flex
flex-col
justify-between
h-[200px]
w-[200px]
rounded-[5px]
bg-[rgba(255,230,124,0.3)]
absolute
top-[20px]
right-[20px]
z-[20]
px-5
pt-8
pb-4
`;

export const Name = tw.div`
ml-[10%]
font-bold
`;

export const Btn = tw.div`
mt-5
flex
flex-col
h-[60%]
justify-between
`;

export const Mypage = tw.button`
rounded-[5px]
w-full
h-[40px]
py-1
bg-[rgba(255,230,124,0.5)]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
transition-all
`;

export const ProfileChange = tw.button`
rounded-[5px]
w-full
h-[40px]
py-1
bg-[rgba(255,230,124,0.5)]
text-[13px]
hover:bg-[rgba(255,230,124,0.9)]
transition-all
`;
