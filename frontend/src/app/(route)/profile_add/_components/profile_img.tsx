'use client'

import { CameraIcon } from '@heroicons/react/24/solid';
import { useState, useRef } from "react";
import Image from "next/image";
import { ProfileImage, ProfileChange } from "../styles/Page.styled";
import { useUploadProfileImage } from "../../../hooks/useProfile"

export default function ProfileImg({ onImageUpload }: { onImageUpload: (res: string) => void }) {
    const [isHovered, setIsHovered] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedFile, setSelectedFile] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>("");
    const imgRef = useRef<HTMLInputElement>(null);
    const { mutate } = useUploadProfileImage();
    const emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const EditImage = (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        if (file && file.size > MAX_FILE_SIZE) {
            // eslint-disable-next-line no-alert
            alert('파일 크기는 5MB 이하여야 합니다.');
            return;
        }

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
                formData.append('profileImageFile', file)

                mutate(formData, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onSuccess: (data: any) => {
                        onImageUpload(data);
                        // eslint-disable-next-line no-console
                        console.log(data)
                    },
                });

            } catch {
                // alert("프로필 이미지 변경에 실패하였습니다.")
            }
        } else {
            // eslint-disable-next-line no-alert
            alert("파일을 찾을 수 없습니다.")
        }
    }

    return (
        <div>
            <ProfileImage onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <input 
                    id="file"
                    name="file"
                    type="file"
                    style={{ display: "none" }} 
                    accept="image/*"
                    onChange={EditImage}
                    ref={imgRef}
                />
                <Image
                    src={imagePreview || emptyImageUrl}
                    style={{ borderRadius: "100%", backgroundColor: "#FFFFFF" }}
                    alt = "profileimage"
                    fill
                />
                <label htmlFor="file">
                    {isHovered && (
                        <div>
                            <ProfileChange>
                                <CameraIcon fill="white" className="w-7 h-7"/>
                            </ProfileChange>
                        </div>
                    )}
                </label>
            </ProfileImage>
        </div>
    )
};