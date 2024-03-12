'use client'
import tw from "tailwind-styled-components";
// import { useS3Upload } from "next-s3-upload"
import Camera from "../../../asset/_img/camera.png"
import { useState } from "react";

export const Profile_img = () => {
    const [isHovered, setIsHovered] = useState(false);
    // const [selectedFile, setSelectedFile] = useState();
    // const [imagePreview, setImagePreview] = useState<string>("");

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    // const UploadImage = (e: any) => {
    //     e.preventDefault();
    //     const file = e.target.files[0];
    //     setSelectedFile(file);
    // }

    return (
        <div>
            <Profile_image onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {isHovered && (
                    <div>
                        <input id="file" name="file" type="file" style={{ display: "none"}} accept="image/*"/>
                        <label htmlFor="file">
                            <Profile_change>
                                <Img>
                                    <img src={Camera.src} style={{ width: "20px", height:"20px" }} alt="Camera"/>
                                </Img>
                            </Profile_change>
                        </label>
                    </div>
                )}
            </Profile_image>
        </div>
    )
};

const Profile_image = tw.div`
bg-[#FFE67C]
opacity-[70%]
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
align-center
relative
`

const Profile_change = tw.div`
bg-[rgba(0,0,0,0.2)]
rounded-[100%]
w-[200px]
h-[200px]
shadow-md
flex
justify-center
items-center
absolute
top-0
left-0
cursor-pointer
`

const Img = tw.div`
opacity-[70%]
cursor-pointer
`