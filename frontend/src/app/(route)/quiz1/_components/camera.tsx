/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */

import { useEffect, useRef, useState } from "react";
import { useSendResultMutation } from "@/app/hooks/useGameA";
import { motion } from "framer-motion";
import { CameraIcon } from "@heroicons/react/24/solid";
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
    getMediaStream();
  }, [isVideoOn]);

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

  return (
    <Wrapper2>
      {isVideoOn ? (
        <div className="flex justify-end items-end space-x-4">
          <motion.div>
            <Video ref={videoRef} autoPlay height={400} width={400} />
          </motion.div>
          <div className="flex flex-col justify-end items-end space-y-4">
            <button name="take_photo" type="button" onClick={takePhoto}>
              <CameraIcon className="w-12 h-12" />
            </button>
            <button
              name="video-toggle"
              type="button"
              onClick={toggleVideo}
              className="p-2 bg-orange text-white h-12 rounded-lg"
            >
              비디오 끄기
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end items-end">
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
