'use client';

import React, { useEffect } from "react";
import { CameraBox } from "./styles/Camera.styled";
import { PhotoBooth } from "./photobooth";

function Camera() {
    useEffect(() => {
        PhotoBooth.init();
    },[]);

    return (
        <CameraBox>카메라</CameraBox>
    );
}

export default Camera
