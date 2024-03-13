'use client'
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation"

export const Profile_form: React.FC = () => {
    const router = useRouter();

    const routetoProfileList = () => {
        router.push('/profile_list')
    }

    return (
        <div>
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
                        {/* <InputYear placeholder="YYYY" maxLength={4} />
                        <InputMonth placeholder="MM" maxLength={2}/>
                        <InputDay placeholder="DD" maxLength={2}/> */}
                </Birth>
                <Gender>
                    <Label>성별</Label>
                    <Btn>
                        <Boy>남자</Boy>
                        <Girl>여자</Girl>
                    </Btn>
                </Gender>

                <Submit_btn onClick={routetoProfileList}>프로필 생성하기</Submit_btn>
            </Form>
        </div>
    )
};

const Form = tw.div`
flex
flex-col
px-5
ml-10
`
const Label = tw.div`
mt-2
mr-10
`

const Input = tw.input`
ml-auto
h-full
w-[250px]
rounded-[7px]
border 
border-gray-300
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

const InputBirth = tw.input`
w-[250px]
ml-auto
h-full
w-[250px]
rounded-[7px]
border 
border-gray-300
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

// const InputYear = tw.input`
// h-full
// w-[80%]
// rounded-[7px]
// border 
// border-gray-300
// bg-transparent 
// px-3
// py-2.5
// font-sans 
// text-sm 
// font-normal 
// text-blue-gray-700
// outline-0
// transition-all 
// placeholder:opacity-100
// placeholder-shown:border 
// placeholder-shown:border-blue-gray-200 
// placeholder-shown:border-blue-gray-200 
// focus:border-gray-900 
// focus:outline-0 
// disabled:border-0
// disabled:bg-blue-gray-50
// `

// const InputMonth = tw.input`
// ml-1
// h-full
// w-[40%]
// rounded-[7px]
// border 
// border-gray-300
// bg-transparent 
// px-3
// py-2.5
// font-sans 
// text-sm 
// font-normal 
// text-blue-gray-700
// outline-0
// transition-all
// placeholder:opacity-100
// placeholder-shown:border 
// placeholder-shown:border-blue-gray-200 
// placeholder-shown:border-blue-gray-200 
// focus:border-gray-900 
// focus:outline-0 
// disabled:border-0 
// disabled:bg-blue-gray-50 
// `

// const InputDay = tw.input`
// ml-1
// h-full
// w-[40%]
// rounded-[7px]
// border 
// border-gray-300
// bg-transparent 
// px-3
// py-2.5
// font-sans 
// text-sm 
// font-normal
// text-blue-gray-700
// outline-0
// transition-all 
// placeholder:opacity-100
// placeholder-shown:border 
// placeholder-shown:border-blue-gray-200 
// placeholder-shown:border-blue-gray-200 
// focus:border-gray-900 
// focus:outline-0 
// disabled:border-0 
// disabled:bg-blue-gray-50 
// `


const Name = tw.div`
mb-3
flex
flex-row
`

const Nickname = tw.div`
mb-3
flex
flex-row
`

const Birth = tw.div`
mb-3
flex
flex-row
`

const Gender = tw.div`
flex
justify-between
`

const Btn = tw.div`
mb-3
flex
w-[250px]
text-black
`

const Boy = tw.button`
bg-gray-100
rounded-[5px]
w-[150px]
mb-3
mr-2
px-3
py-2.5
hover:bg-gray-300
`

const Girl = tw.button`
bg-gray-100
rounded-[5px]
w-[150px]
mb-3
px-3
py-2.5
hover:bg-gray-300
`

const Submit_btn = tw.button`
rounded-[5px]
bg-gray-100
py-2.5
hover:bg-gray-300
text-black
`