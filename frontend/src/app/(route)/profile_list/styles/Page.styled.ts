import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
flex-col
justify-center
items-center
`;

export const Profiles = tw.div`
flex
justify-center
mt-30
h-[100vh]
m-[0]
`;
// flex-wrap

// 프로필 추가
export const AddProfileWrapper = tw.div`
flex
flex-col
px-10
py-10
justify-center
items-center
`;

export const ProfileImg = tw.button`
w-[200px]
h-[200px]
rounded-[100%]
bg-[rgba(155,205,160,0.5)]
cursor-pointer
shadow-md
hover:p-12
transition-all
text-[30px]
`;

export const ProfileName = tw.button`
font-bold
mt-5
flex
justify-center
`;

// 자녀 프로필
export const ProfileWrapper = tw.div`
flex
flex-col
px-10
py-10
justify-center
items-center
`;

// const Profile_img = tw.button`
// w-[200px]
// h-[200px]
// rounded-[100%]
// bg-[#FFE67C]
// opacity-[70%]
// shadow-md
// cursor-pointer
// `

// const Profile_name = tw.button`
// font-bold
// mt-5
// flex
// justify-center
// `
