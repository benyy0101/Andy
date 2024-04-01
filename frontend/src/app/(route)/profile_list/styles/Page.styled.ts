import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
flex
justify-center
items-center
`;

export const Profiles = tw.div`
flex
justify-center
h-[85vh]
m-[0]
`;

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
flex
justify-center
items-center
overflow-hidden
`;

export const ImageTest = tw.div`
w-[100%]
h-[100%]
flex
justify-center
aspect-square
`

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

export const DeleteBtn = tw.button`
p-2
m-2
rounded-[10px]
bg-[#EEA241]
text-white
text-sm
hover:bg-[#f08a07]
`

export const ScrollButton = tw.div`
flex
items-center
justify-center
cursor-pointer
`

export const ProfilesContainer = tw.div`
flex
items-center
`

// 프로필 개수 제한 모달
export const ProfileModalBg = tw.div`
z-[10]
flex
items-center
justify-center
absolute
h-[90%]
w-full
`
// bg-[rgba(0,0,0,0.3)]

export const ProfileModalWrapper = tw.div`
bg-[#fff]
text-black
rounded-[10px]
font-semibold
z-[100]
w-[90%]
web:w-[350px]
h-[40%]
flex
flex-col
justify-between
items-center
p-5
shadow-md
`

export const Icon = tw.div`
h-[30%]
pt-6
flex
justify-center
items-center
`

export const Alert = tw.div`
flex
items-center
justify-center
text-[17px]
web:text-[15px]
`

export const Btn = tw.div`
bg-[#EEA241]
text-white
rounded-[10px]
w-[100%]
h-[50px]
web:h-[40px]
flex
justify-center
items-center
cursor-pointer
`

// 취소 모달창
export const BtnWrapper = tw.div`
flex
justify-between
w-[100%]
`

export const ClickBtn = tw.div`
bg-[#EEA241]
text-white
rounded-[10px]
w-[48%]
h-[50px]
web:h-[40px]
flex
justify-center
items-center
cursor-pointer
`

export const BackBtn = tw.div`
bg-[#c9c9c9]
text-white
rounded-[10px]
w-[48%]
h-[50px]
web:h-[40px]
flex
justify-center
items-center
cursor-pointer
`

export const LogoWrapper = tw.div`
web:h-fit
web:p-5
web:w-dvw
p-2
flex
justify-center
`