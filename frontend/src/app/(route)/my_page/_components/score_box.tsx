'use client'
import tw from "tailwind-styled-components";
import styled from 'styled-components';

export const Score_box: React.FC = () => {
    return (
        <Wrapper>
            <Select_Date>3월 15일</Select_Date>
            <Score_list_scrollbar>
                <Score_e>
                    <Test_num>퀴즈 1</Test_num>
                    <Test_res>4/5</Test_res>
                </Score_e>
                <Score_e>
                    <Test_num>퀴즈 2</Test_num>
                    <Test_res>4/5</Test_res>
                </Score_e>
                <Score_e>
                    <Test_num>퀴즈 3</Test_num>
                    <Test_res>4/5</Test_res>
                </Score_e>
                <Score_e>
                    <Test_num>퀴즈 4</Test_num>
                    <Test_res>4/5</Test_res>
                </Score_e>
            </Score_list_scrollbar>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
justify-center
h-full
`

const Select_Date = tw.div`
font-bold
mr-[auto]
text-[18px]
mb-[20px]
ml-[3px]
`

const Score_list = tw.div`
overflow-y-auto
h-[100%]
`

const Score_list_scrollbar = styled(Score_list)`
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

const Score_e = tw.div`
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

const Test_num = tw.div`
`

const Test_res = tw.div`
`