import tw from "tailwind-styled-components";
import styled from "styled-components";

export const Wrapper = tw.div`
flex
justify-center
items-center
m-[0 auto]
select-none
`;

export const Content = tw.div`
flex
h-[80%]
w-[80%]
web:h-[78vh]
web:w-[75%]
web:justify-center
flex-col
web:flex-row
m-[0 auto]
`;

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
web:w-[67%]
mb-3
web:mb-0
p-0
pb-4
relative
`;

export const Info = tw.div`
text-black
w-[100%]
web:h-full
web:w-[33%]
web:pl-6
web:flex
web:flex-col
web:justify-between
flex
flex-col-reverse
`;

// export const ProfileWrapper1 = tw.div`
// web:w-1/2
// `

// export const ScoreWrapper1 = tw.div`
// web:w-1/2
// `

export const Profile = tw.div`
bg-[#ffffff]
p-[20px]
pl-[30px]
pr-[30px]
pb-[15px]
rounded-[15px]
flex
items-center
justify-between
shadow-md
hidden
web:block
mb-5
`;

export const ProfileMobile = tw.div`
bg-[#ffffff]
p-[25px]
pb-[15px]
rounded-[15px]
flex
items-center
justify-between
shadow-md
mt-3
mb-3
block
web:hidden
`;

export const Score = tw.div`
bg-[#EEA241]
text-black
rounded-[15px]
p-8
pr-7
shadow-md
h-[350px]
web:flex-grow
web:overflow-y-auto
mb-7
web:mb-0
`;

export const ProfileEdit = tw.div`
flex
w-[100%]
mt-1.5
items-center
text-sm
`;

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
`;

export const ProfileContent = tw.div`
w-[100%]
flex
justify-center
items-center
`;

// 캘린더
export const CalendarWrapper = tw.div`
flex
flex-col
w-[100%]
web:p-10
p-2
pl-7
pr-7
`;

export const StyledHeader = tw.div`
flex
justify-center
items-center
`;

export const StyledBody = tw.div`
mb-[15px]
`;

export const StyledBody1 = styled(StyledBody)`
  text-align: center;

  .holiday,
  .grayed {
    color: #484848;
    pointer-events: none;
  }

  .selected {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background: rgba(255, 230, 124, 0.7);
    font-weight: 700;
    color: #fff;
    @media (max-width: 475px) {
      border-radius: 5px; // 화면 너비가 475px 이하인 경우 border-radius 제거
    }
  }

  .today {
    border-radius: 50%;
    font-weight: bold;
    background: rgba(238, 162, 65, 0.6);
    @media (max-width: 475px) {
      border-radius: 5px; // 화면 너비가 475px 이하인 경우 border-radius 제거
    }
  }

  .isSelected {
    position: relative;
    color: pink;
    font-size: 10px;
    font-weight: 400;
  }

  .isToday {
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }

  .none {
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
web:mb-1
mt-12
web:mt-0
`;

export const PreviousIcon = tw.button`
w-[15px]
h-[15px]
web:w-[24px]
web:h-[24px]
ml-[3px]
mr-[3px]
web:ml-[8px]
web:mr-[8px]
web:mb-1
mt-12
web:mt-0
`;

export const NextIcon = tw.button`
w-[15px]
h-[15px]
web:w-[24px]
web:h-[24px]
ml-[3px]
mr-[3px]
web:ml-[8px]
web:mr-[8px]
web:mb-1
mt-12
web:mt-0
`;

export const Row1 = tw.div`
flex
justify-center
items-center
cursor-pointer
w-[100%]
h-[50px]
web:h-[55px]
`;

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
`;

// Calendar Body
export const Box = tw.div`
flex
w-[12%]
h-[0]
m-[6px]
text-[14px]
justify-center
`;

export const DayImg = tw.div`
flex
justify-center
web:w-[35px]
web:h-[35px]
`;

export const Text = tw.span`
static
w-[55px]
h-[55px]
text-[#292929]
`;

export const Day = tw.span`
relative
flex
flex-col
justify-center
items-center
`;

// 프로필
export const ProfileWrapper = tw.div`
flex
flex-col
justify-center
items-center
w-[100%]
`;

export const Form = tw.form`
flex
flex-col
justify-center
w-[70%]
text-sm
`;

export const Label = tw.div`
flex
items-center
w-[35%]
h-[30px]
font-bold
text-[#EEA241]
text-[13px]
`;

export const Input = tw.input`
ml-auto
w-[65%]
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
`;
// placeholder-shown:border
// placeholder-shown:border-blue-gray-200
// placeholder-shown:border-blue-gray-200

export const InputBirth = tw.input`
ml-auto
w-[65%]
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
`;

export const Name = tw.div`
mb-2
flex
flex-row
`;

export const Nickname = tw.div`
mb-2
flex
flex-row
`;

export const Birth = tw.div`
mb-2
flex
flex-row
`;

export const Gender = tw.div`
flex
justify-between
`;

export const Btn = tw.div`
flex
text-black
w-[65%]
text-[13px]
justify-between
h-[35px]
`;

export const ProfileImage = tw.div`
w-[28%]
flex
mr-4
web:mr-5
aspect-square
rounded-[100%]
`;

// export const ImageTest = tw.div`
// flex
// aspect-square
// `

export const CurrentInfo = tw.div`
w-[65%]
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
`;

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
`;

// 점수
export const ScoreWrapper = tw.div`
flex
flex-col
justify-center
h-full
`;

export const ScoreHeader = tw.div`
text-[15px]
text-white
flex
mb-[20px]
justify-center
`;

export const SelectDate = tw.div`
font-bold
mr-[auto]
ml-[3px]
flex
items-center
`;

export const RetryBtn = tw.div`
px-2
py-1
rounded-[5px]
bg-[#FFE67C]
flex
items-center
cursor-pointer
text-orange
`;

export const ScoreList = tw.div`
overflow-y-auto
h-[90%]
`;

export const ScoreListScrollbar = styled(ScoreList)`
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffe67c;
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
`;

export const TestNum = tw.div`
`;

export const TestRes = tw.div`
`;

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
`;

export const ProfileImage1 = tw.div`
rounded-[100%]
shadow-md
flex
justify-center
relative
`;

export const NoTest = tw.div`
text-white
font-bold
h-[90%]
flex
justify-center
items-center
`;

export const Num = tw.div`
font-bold
text-[#EEA241]
flex
flex-left
text-[14px]
`;

export const Mode = tw.div`
text-[11px]
text-left
text-[#878787]
`;

export const Temp = tw.div`
flex
`;

export const SolveCount = tw.div`
p-2
pl-2
pr-2
web:p-2
mt-3
rounded-[5px]
flex
text-[#EEA241]
absolute
top-0
left-2
web:static
`;

// bg-[#EEA241]

export const InfoWrapper = tw.div`
overflow-hidden
whitespace-nowrap
overflow-ellipsis
`;

export const ErrorMessage = tw.span`
text-red
text-[10px]
`;
