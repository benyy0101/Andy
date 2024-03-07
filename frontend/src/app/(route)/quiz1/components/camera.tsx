import React from "react";
import tw from "tailwind-styled-components";


const Camera = () => {
    const Camerabox = tw.div`
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
    `

    return (
        <Camerabox>카메라</Camerabox>
    );
};

export default Camera
