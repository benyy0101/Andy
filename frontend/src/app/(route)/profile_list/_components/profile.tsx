import tw from "tailwind-styled-components";

export const Profile = () => {
    return (
        <Wrapper>
            <Profile_img />
            <Profile_name>이름</Profile_name>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
px-5
`

const Profile_img = tw.button`
w-[200px]
h-[200px]
rounded-[100%]
bg-[#FFE67C]
opacity-[70%]
shadow-md
cursor-pointer
`

const Profile_name = tw.button`
font-bold
mt-5
flex
justify-center
`