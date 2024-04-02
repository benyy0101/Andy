import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
`

export const ProfileWrapper = tw.div`
flex
justify-center
items-center
h-[80vh]
flex-col
web:flex-row

`

// 프로필 입력폼
export const Form = tw.form`
flex
flex-col
web:p-7
w-[300px]
web:w-[450px]
`

export const Label = tw.div`
mt-2
mr-5
font-bold
w-[30%]
web:w-[20%]
flex
flex-start
`

export const Input = tw.input`
ml-auto
h-full
w-[80%]
rounded-[7px]
bg-[#FFFFFF]
px-3
py-2.5
font-sans
text-sm 
font-normal 
text-black
outline-0
transition-all
placeholder-shown:border 
placeholder-shown:border-blue-gray-200 
placeholder-shown:border-blue-gray-200 
focus:border-gray-900 
focus:outline-0 
disabled:border-0 
disabled:bg-blue-gray-50 
`

export const InputBirth = tw.input`
ml-auto
h-full
w-[80%]
rounded-[7px]
bg-[#FFFFFF]
px-3
py-2.5
font-sans 
text-sm
font-normal
text-black
outline-0
transition-all
focus:border-gray-900
focus:outline-0 
disabled:border-0
disabled:bg-blue-gray-50
`

export const Name = tw.div`
mb-3
flex
flex-row
`

export const Nickname = tw.div`
mb-3
flex
flex-row
`

export const Birth = tw.div`
mb-3
flex
flex-row
`

export const Gender = tw.div`
flex
justify-between
`

export const Btn = tw.div`
flex
w-[80%]
text-black
justify-between
`

export const BtnLabel = tw.label`
bg-[#FFFFFF]
rounded-[5px]
w-[48%]
mb-3
px-3
py-2.5
hover:bg-[#EEA241]
hover:text-white
focus:bg-[#EEA241]
focus:text-white
cursor-pointer
font-bold
text-[#EEA241]
`

export const SubmitBtn = tw.button`
font-bold
h-[50px]
rounded-[10px]
bg-[#EEA241]
text-white
py-2.5
hover:bg-[#f08a07]
mt-2
`

// 프로필 이미지
export const ProfileImage = tw.div`
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
items-center
relative
mb-10
web:mb-0

`

export const ProfileChange = tw.div`
bg-[rgba(0,0,0,0.5)]
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
items-center
absolute
top-0
left-0
cursor-pointer
`

export const ProfileListBtn = tw.div`
flex
flex-start
ml-5
cursor-pointer
`

export const ErrorMessage = tw.span`
text-red
text-[0.75rem]
mb-[0.5rem]
`

export const LogoWrapper = tw.div`
web:h-fit
web:p-5
web:w-dvw
p-2
flex
justify-center
`