import tw from "tailwind-styled-components";
// import { useNavigate } from "react-router-dom";

export const Logo = () => {
    // const navigate = useNavigate();

    // const navigatetoHome = () => {
    //     navigate(`/profile_list`);
    // };

    return (
        <Wrapper>
            <Title>로고</Title>
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex
justify-center
absolute
top-[20px]
left-[50%]
transform
-translate-x-1/2
`

const Title = tw.div`
font-bold
text-3xl
cursor-pointer
`