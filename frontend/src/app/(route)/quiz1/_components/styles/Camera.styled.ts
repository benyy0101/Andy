import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
    flex
    items-center
    justify-center
    text-4xl
    font-bold
    mt-20
    bg-white
    rounded-md
    w-100
    h-80
    p-20
`;

export const Wrapper2 = tw.div`
flex
w-3/4
web:w-full
`;

export const Video = tw.video`
w-full
web:w-[400px]
web:h-[300px]
rounded-lg
`;
