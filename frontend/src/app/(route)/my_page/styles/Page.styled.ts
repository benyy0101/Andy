import tw from "tailwind-styled-components";
import styled from 'styled-components';

export const Wrapper = tw.div`
flex
flex-col
justify-center
items-center
h-[100vh]
m-[0 auto]
`

export const Content = tw.div`
flex
h-[75%]
w-[80%]
justify-center
`

export const Calendar = tw.div`
bg-[#ffffff]
text-black
rounded-[15px]
w-[65%]
flex
flex-col
justify-center
items-center
shadow-md
`

export const Info = tw.div`
text-black
w-[35%]
pl-6
flex
flex-col
justify-between
`

export const Profile = tw.div`
bg-[#ffffff]
h-[44%]
p-[30px]
rounded-[15px]
flex
items-center
justify-between
shadow-md
`

export const Score = tw.div`
bg-[#EEA241]
text-black
h-[53%]
rounded-[15px]
p-8
pr-7
shadow-md
`

export const ProfileEdit = tw.div`
flex
w-[100%]
mt-2
items-center
`

export const EditBtn = tw.button`
ml-auto
rounded-[10px]
pt-1
pb-1
pr-2
pl-2
bg-[#EEA241]
text-[#fff]
`

export const ProfileContent = tw.div`
w-[100%]
flex
`

// 캘린더
export const CalendarWrapper = tw.div`
flex
flex-col
w-[80%]
`

export const StyledHeader = tw.div`
flex
justify-center
items-center
`

export const StyledBody = tw.div`
mb-[15px]
`

export const StyledBody1 = styled(StyledBody)`
  text-align: center;

  .holiday,
  .grayed{
    color: #484848;
    pointer-events: none;
  }

  .selected{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background : rgba(255, 230, 124, 0.7);
    font-weight: 700;
    color: #fff;
  }

  .today{
    border-radius: 50%;
    font-weight: bold;
    background : rgba(238, 162, 65, 0.8);
  }

  .isSelected{
    position: relative;
    color: pink;
    font-size: 10px;
    font-weight: 400;
  }

  .isToday{
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }

  .none{
    display: none;
  }
`;

// Calendar Header
export const ThisMonth = tw.span`
font-bold
text-[35px]
ml-[20px]
mr-[20px]
text-[#EEA241]
`

export const PreviousIcon = tw.button`
w-[24px]
h-[24px]
ml-[8px]
mr-[8px]
`

export const NextIcon = tw.button`
w-[24px]
h-[24px]
ml-[8px]
mr-[8px]
`

export const Row1 = tw.div`
flex
justify-center
items-center
cursor-pointer
w-[100%]
h-[65px]
`

export const RowWeek = tw.div`
border-b
border-solid
border-gray-300
flex
justify-center
items-center
cursor-pointer
w-[100%]
h-[65px]
`

// Calendar Body
export const Box = tw.div`
flex
w-[12%]
h-[0]
m-[6px]
text-[14px]
justify-center
`

export const DayImg = tw.div`
flex
justify-center
`

export const Text = tw.span`
static
w-[65px]
h-[65px]
text-[#292929]
`

export const Day = tw.span`
relative
flex
flex-col
justify-center
items-center
w-[100%]
`


// 프로필
export const ProfileWrapper = tw.div`
flex
flex-col
items-center
w-[100%]
`

export const Form = tw.form`
flex
flex-col
pl-4
w-[70%]
`

export const Label = tw.div`
flex
items-center
mr-4
w-[30%]
font-bold
text-[#EEA241]
`

export const Input = tw.input`
ml-auto
w-[70%]
rounded-[7px]
border
border-blue-gray-200
bg-[#FFFFFF]
px-3
py-2
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
// placeholder-shown:border 
// placeholder-shown:border-blue-gray-200 
// placeholder-shown:border-blue-gray-200 

export const InputBirth = tw.input`
ml-auto
w-[70%]
rounded-[7px]
border
border-blue-gray-200
bg-[#FFFFFF]
px-3
py-2
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
mb-2
flex
flex-row
`

export const Nickname = tw.div`
mb-2
flex
flex-row
`

export const Birth = tw.div`
mb-2
flex
flex-row
`

export const Gender = tw.div`
flex
justify-between
`

export const Btn = tw.div`
flex
text-black
w-[70%]
text-sm
justify-between
`

export const ProfileImage = tw.div`
w-[30%]
flex
justify-center
items-center
`

export const ImageTest = tw.div`
w-[100%]
rounded-[100%]
aspect-square
flex
justify-center
items-center
`

export const CurrentInfo = tw.div`
w-[70%]
rounded-[7px]
border-[white]
bg-[#FFFFFF]
px-3
py-2
text-sm
font-sans
font-normal 
text-black
outline-0
flex
flex-start
`

export const BtnLabel = tw.label`
bg-[#FFE67C]
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
text-white
`

// 점수
export const ScoreWrapper = tw.div`
flex
flex-col
justify-center
h-full
`

export const SelectDate = tw.div`
font-bold
mr-[auto]
text-[18px]
mb-[20px]
ml-[3px]
text-[#FFFFFF]
`

export const ScoreList = tw.div`
overflow-y-auto
h-[100%]
`

export const ScoreListScrollbar = styled(ScoreList)`
&::-webkit-scrollbar {
    width: 13px;
}
&::-webkit-scrollbar-thumb {
    background-color: #FFE67C;
    border-radius: 10px;
}
&::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}
`;

export const Score1 = tw.div`
rounded-[15px]
bg-[#ffffff]
flex
w-[98%]
justify-between
items-center
h-[68px]
pl-10
pr-10
mb-2
`

export const TestNum = tw.div`
`

export const TestRes = tw.div`
`

export const ProfileChange = tw.div`
bg-[rgba(0,0,0,0.5)]
rounded-[100%]
w-[100%]
h-[100%]
shadow-md
flex
justify-center
items-center
absolute
top-0
left-0
cursor-pointer
`

export const ProfileImage1 = tw.div`
rounded-[100%]
shadow-md
flex
justify-center
align-center
relative
w-[100%]
aspect-square
`