'use client'
import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import tw from "tailwind-styled-components";

import Image from "next/image";


export const CameraComponent = () => {
    const camera = useRef(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage] = useState(null);
    return (
        <div>
            {/* <Camera ref={camera} errorMessages={{
                noCameraAccessible: undefined,
                permissionDenied: undefined,
                switchCamera: undefined,
                canvas: undefined
            }} />
            <button onClick={() => setImage(camera.takePhoto())}>Take photo</button>
            <Image src={image} alt='Taken photo'/> */}
        </div>
        );
    };
    
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
