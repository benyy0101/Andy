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
web:justify-center
flex-col
web:flex-row
m-[0 auto]
`

export const Calendar = tw.div`
bg-[#ffffff]
text-black
rounded-[15px]
flex
flex-col
web:justify-center
items-center
shadow-md
w-[100%]
web:w-[65%]
mb-3
web:mb-0
pl-2.5
pr-2.5
pt-5
pb-5
web:p-0
relative
`

export const Info = tw.div`
text-black
w-[100%]
web:w-[35%]
web:pl-6
web:flex
web:flex-col
web:justify-between
flex
flex-col-reverse
`

// export const ProfileWrapper1 = tw.div`
// web:w-1/2
// `

// export const ScoreWrapper1 = tw.div`
// web:w-1/2
// `

export const Profile = tw.div`
bg-[#ffffff]
web:h-[40%]
p-[25px]
pb-[15px]
rounded-[15px]
flex
items-center
justify-between
shadow-md
mb-8
web:mb-0
hidden
web:block
`

export const ProfileMobile = tw.div`
bg-[#ffffff]
p-[25px]
pb-[15px]
rounded-[15px]
flex
items-center
justify-between
shadow-md
mb-3
block
web:hidden
`

export const Score = tw.div`
bg-[#EEA241]
text-black
h-[300px]
web:h-[57%]
rounded-[15px]
p-8
pr-7
shadow-md
mb-3
web:mb-0
`

export const ProfileEdit = tw.div`
flex
w-[100%]
mt-2
items-center
text-sm
`

export const EditBtn = tw.button`
ml-auto
rounded-[5px]
pt-1
pb-1
pr-3
pl-3
bg-[#EEA241]
text-[#fff]
text-[13px]
font-bold
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
    @media (max-width: 475px) {
      border-radius: 5px; // 화면 너비가 475px 이하인 경우 border-radius 제거
    }
  }

  .today{
    border-radius: 50%;
    font-weight: bold;
    background : rgba(238, 162, 65, 0.6);
    @media (max-width: 475px) {
      border-radius: 5px; // 화면 너비가 475px 이하인 경우 border-radius 제거
    }
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
text-[25px]
web:text-[35px]
ml-[10px]
mr-[10px]
web:ml-[20px]
web:mr-[20px]
text-[#EEA241]
`

export const PreviousIcon = tw.button`
w-[15px]
h-[15px]
web:w-[24px]
web:h-[24px]
ml-[3px]
mr-[3px]
web:ml-[8px]
web:mr-[8px]
`

export const NextIcon = tw.button`
w-[15px]
h-[15px]
web:w-[24px]
web:h-[24px]
ml-[3px]
mr-[3px]
web:ml-[8px]
web:mr-[8px]
`

export const Row1 = tw.div`
flex
justify-center
items-center
cursor-pointer
w-[100%]
h-[50px]
web:h-[55px]
`

export const RowWeek = tw.div`
border-b
border-solid
border-gray-300
flex
justify-center
items-center
cursor-pointer
w-full
h-14
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
web:w-[35px]
web:h-[35px]
`

export const Text = tw.span`
static
w-[55px]
h-[55px]
text-[#292929]
`

export const Day = tw.span`
relative
flex
flex-col
justify-center
items-center
`


// 프로필
export const ProfileWrapper = tw.div`
flex
flex-col
justify-center
items-center
w-[100%]
`

export const Form = tw.form`
flex
flex-col
justify-center
w-[70%]
text-sm
`

export const Label = tw.div`
flex
items-center
w-[35%]
h-[30px]
font-bold
text-[#EEA241]
text-[13px]
`

export const Input = tw.input`
ml-auto
w-[70%]
rounded-[7px]
border
border-blue-gray-200
bg-[#FFFFFF]
h-[30px]
px-2
py-2
font-sans
text-[13px]
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
h-[30px]
px-2
py-2
font-sans 
text-[13px]
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
text-[13px]
justify-between
h-[35px]
`

export const ProfileImage = tw.div`
w-[28%]
flex
justify-center
items-center
mr-4
web:mr-5
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
border
border-blue-gray-200
bg-[#FFFFFF]
px-2
text-[13px]
font-sans
font-normal
text-black
outline-0
flex
flex-start
items-center
`

export const BtnLabel = tw.label`
bg-[#FFE67C]
rounded-[5px]
w-[48%]
h-[30px]
hover:bg-[#EEA241]
hover:text-white
focus:bg-[#EEA241]
focus:text-white
cursor-pointer
font-bold
text-white
flex
items-center
justify-center
text-[13px]
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
text-[15px]
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
pl-8
pr-8
mb-2
text-[13px]
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

export const NoTest = tw.div`
text-white
font-bold
h-[90%]
flex
justify-center
items-center
`

export const Num = tw.div`
font-bold
text-[#EEA241]
flex
flex-left
text-[14px]
`

export const Mode = tw.div`
text-[13px]
`

export const Temp = tw.div`
flex
`

export const SolveCount = tw.div`
absolute
top-[20px]
right-[20px]
p-1
pl-2
pr-2
web:p-2
web:pl-3
web:pr-3
text-white
bg-[#EEA241]
rounded-[5px]
`