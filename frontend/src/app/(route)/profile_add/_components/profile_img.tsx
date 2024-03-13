'use client'
import tw from "tailwind-styled-components";
import { CameraIcon } from '@heroicons/react/24/solid';
import { useState, useRef } from "react";

export const Profile_img = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const imgRef = useRef<HTMLInputElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const EditImage = (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        setSelectedFile(file);


        // 미리보기
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };

        if (file !== undefined) {
            try{
                const formData = new FormData();
                formData.append('file', file)

                try {
                    // const res = await s3업로드(formData)
                } catch(error) {
                    console.log(error)
                }

            } catch {
                alert("프로필 이미지 변경에 실패하였습니다.")
            }
        } else {
            alert("파일을 찾을 수 없습니다.")
        }
    }

    return (
        <div>
            <Profile_image onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <input 
                    id="file"
                    name="file"
                    type="file"
                    style={{ display: "none" }} 
                    accept="image/*"
                    onChange={EditImage}
                    ref={imgRef}
                />
                <img src={imagePreview ? imagePreview: ``} style={{borderRadius: "100%"}} />
                <label htmlFor="file">
                    {isHovered && (
                        <div>
                            <Profile_change>
                                <CameraIcon fill="white" className="w-7 h-7"/>
                            </Profile_change>
                        </div>
                    )}
                </label>
            </Profile_image>
        </div>
    )
};

const Profile_image = tw.div`
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
bg-[rgba(0,0,0,0.5)]
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