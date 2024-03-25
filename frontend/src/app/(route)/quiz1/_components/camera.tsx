/* eslint-disable jsx-a11y/media-has-caption */

import { useEffect, useRef, useState } from "react";
import { useSendResultMutation } from "@/app/hooks/useGameA";
import { motion } from "framer-motion";
import { Wrapper2, Video } from "./styles/Camera.styled";

interface ICamera {
  setIsTrue: (stat: boolean) => void;
  input: string;
}
function Camera(props: ICamera) {
  const { setIsTrue, input } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState("");

  const { mutate } = useSendResultMutation();
  useEffect(() => {
    const constraints = { audio: false, video: true };
    const getMediaStream = async () => {
      try {
        const mediaStream =
          await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error accessing media devices:", error);
      }
    };
    getMediaStream();
  }, []);

  const takePhoto = async () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")!
        .drawImage(video, 0, 0, canvas.width, canvas.height);

      const canvasBlob: Blob = await new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          }
        }, "image/png");
      });
      setImgSrc(canvas.toDataURL("image/png"));
      const formData = new FormData();
      formData.append("picture", canvasBlob, "image.png");
      formData.append("question_name", input);
      mutate(formData, {
        onSuccess: (data) => {
          // eslint-disable-next-line no-console
          console.log(data);
          setIsTrue(data.question_history_is_ok);
        },
      });
    }
  };

  useEffect(() => {}, [imgSrc]);

  return (
    <Wrapper2>
      <motion.div>
        <Video ref={videoRef} autoPlay height={300} width={300} />
      </motion.div>
      <button name="take_photo" type="button" onClick={takePhoto}>
        사진찍기
      </button>
    </Wrapper2>
  );
}

export default Camera;
