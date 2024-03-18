/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {Wrapper2} from "./styles/Camera.styled";

function Camera() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videoRef = useRef<any>(null);
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const constraints = { audio: false, video: true };
        const getMediaStream = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error accessing media devices:', error);
            }
        };
        getMediaStream();
    },[]);

    const takePhoto = () => {
        const canvas = document.createElement('canvas');
        const video = videoRef.current;
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d')!.drawImage(video, 0, 0, canvas.width, canvas.height);
            setImgSrc(canvas.toDataURL('image/png'));
            // eslint-disable-next-line no-console
            console.error(canvas.toDataURL('image/png'));
        }
    }
    return (
        <Wrapper2>
            <video ref={videoRef} autoPlay height={300} width={300}/>
            {imgSrc && <Image src={imgSrc} id="target" alt="INKN" height={300} width={300}/>}
            <button name="take_photo" type="button" onClick={takePhoto}>사진찍기</button>
        </Wrapper2>
    );
}

export default Camera
