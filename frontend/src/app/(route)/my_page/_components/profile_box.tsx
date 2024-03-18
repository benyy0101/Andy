'use client'
import tw from "tailwind-styled-components";

export const Profile_box: React.FC = () => {
    return (
        <Wrapper>
            <Profile_Image />
            <Form>
                <Name>
                    <Label>이름</Label>
                    <Input />
                </Name>
                <Nickname>
                    <Label>닉네임</Label>
                    <Input />
                </Nickname>
                <Birth>
                    <Label>생년월일</Label>
                    <InputBirth type="date" />
                </Birth>
                <Gender>
                    <Label>성별</Label>
                    <Btn>
                        <Boy>남자</Boy>
                        <Girl>여자</Girl>
                    </Btn>
                </Gender>
            </Form>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
justify-center
items-center
`

const Form = tw.form`
flex
flex-col
pl-4
`

const Label = tw.div`
flex
items-center
mr-4
`

const Input = tw.input`
ml-auto
w-[150px]
rounded-[7px]
border 
border-gray-300
bg-[#FFFFFF]
px-3
py-2
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

const InputBirth = tw.input`
ml-auto
w-[150px]
rounded-[7px]
border 
border-gray-300
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

const Name = tw.div`
mb-2
flex
flex-row
`

const Nickname = tw.div`
mb-2
flex
flex-row
`

const Birth = tw.div`
mb-2
flex
flex-row
`

const Gender = tw.div`
flex
justify-between
`

const Btn = tw.div`
flex
text-black
`

const Boy = tw.button`
bg-gray-100
rounded-[5px]
w-[70px]
mr-2
px-3
py-2
hover:bg-gray-300
`

const Girl = tw.button`
bg-gray-100
rounded-[5px]
w-[70px]
px-3
py-2
hover:bg-gray-300
`

// const Submit_btn = tw.button`
// rounded-[5px]
// bg-gray-100
// py-2.5
// hover:bg-gray-300
// text-black
// `

const Profile_Image = tw.div`
rounded-[100%]
w-[120px]
h-[120px]
bg-[#FFE67C]
`