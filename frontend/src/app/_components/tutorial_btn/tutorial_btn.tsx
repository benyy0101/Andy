import tw from "tailwind-styled-components";
// import question_mark from "../../assets/img/question_mark.png"

export const Tutorial_Btn = () => {
    return (
        <Btn>
            {/* <img src={question_mark} /> */}
            ?
        </Btn>
    )
};

const Btn = tw.button`
font-bold
bg-[#e9e9e9]
opacity-[80%]
w-[50px]
h-[50px]
rounded-[100%]
shadow-md
transition-all
absolute
right-[40px]
bottom-[40px]
hover:bg-[#CACACA]
`