/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */

import { useEffect, useRef, useState } from "react";
import { useSendResultMutation } from "@/app/hooks/useGameA";
import { motion } from "framer-motion";
import Image from "next/image";
import andy from "@/app/asset/_img/camera-preview.png";
import cameraIcon from "@/app/asset/_img/camera-icon.png";
import { Wrapper2, Video } from "./styles/Camera.styled";

interface ICamera {
  setIsTrue: (stat: boolean) => void;
  input: string;
}

function Camera(props: ICamera) {
  const { setIsTrue, input } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoOn, setIsVideoOn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imgSrc, setImgSrc] = useState("");

  const { mutate } = useSendResultMutation();
  const toggleVideo = () => {
    setIsVideoOn((prev) => !prev);
  };

  useEffect(() => {
    const constraints = {
      audio: false,
      video: {
        facingMode: "environment", // Use rear camera if available
      },
    };
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
    if (isVideoOn) {
      getMediaStream();
    }
  }, [isVideoOn]);

  const takePhoto = async () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    const cameraSound = "asset/audio/camera_sound.mp3";
    const audio = new Audio(cameraSound);
    audio.play();
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

  return (
    <Wrapper2>
      {isVideoOn ? (
        <div className="flex flex-col justify-start items-start space-y-4">
          <motion.div>
            <Video ref={videoRef} autoPlay />
          </motion.div>
          <div className="flex items-end space-x-4">
            <button
              name="video-toggle"
              type="button"
              onClick={toggleVideo}
              className="p-2 bg-orange text-white h-12 rounded-lg"
            >
              비디오 끄기
            </button>
            <button
              name="take_photo"
              type="button"
              onClick={takePhoto}
              className="rounded-md h-12"
            >
              <div className="transition-all hover:scale-110">
                <Image src={cameraIcon} height={50} width={50} alt="camera" />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start h-full gap-2">
          <div className="flex justify-center items-center flex-grow-[1] border border-orange rounded-lg">
            <Image width={400} height={300} src={andy} alt="andy" />
          </div>
          <button
            name="video-toggle"
            type="button"
            onClick={toggleVideo}
            className="flex justify-center items-center p-2 bg-orange text-white h-12 rounded-lg"
          >
            비디오 켜기
          </button>
        </div>
      )}
    </Wrapper2>
  );
}

export default Camera;
