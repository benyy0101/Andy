'use client'

import React, { useState, useRef } from "react"
import Image from "next/image";
import { CameraIcon } from '@heroicons/react/24/solid';
import storeProfile from "@/app/_store/storeProfile"
import { ProfileWrapper, ProfileImage, ProfileImage1, ProfileChange, Form, Input, InputBirth, Label, Name, Nickname, Birth, Gender, EditBtn, ProfileContent, ProfileEdit, ImageTest, CurrentInfo, Btn, BtnLabel} from "../styles/Page.styled"
// import { useUpdateProfile } from "../../../hooks/useProfile"
import { useGetProfile, useUploadProfileImage, useUpdateProfile } from "../../../hooks/useProfile"
import emptyImage from "../../../asset/_img/profile_img.png"

export default function ProfileBox() {
    const { profile } = storeProfile();
    const childnum = String(profile.child_seq)
    const { data, isLoading } = useGetProfile(childnum);

    // eslint-disable-next-line no-console
    // console.log(profile)

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedFile, setSelectedFile] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>("");
    const [previousImage, setPreviousImage] = useState<string>("");
    const [changeFile, setChangeFile] = useState<string>('');
    const { mutate: uploadMutate } = useUploadProfileImage();
    const { mutate: updateMutate } = useUpdateProfile();
    const imgRef = useRef<HTMLInputElement>(null);
    const emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

    const formatDateArray = (birthdayArray: number[]) => {
        const year = birthdayArray[0];
        const month = `0${birthdayArray[1]}`.slice(-2);
        const day = `0${birthdayArray[2]}`.slice(-2);
        return `${year}-${month}-${day}`;
    };

    // eslint-disable-next-line no-console
    // console.log(data)
    
    const childBirth = isLoading ? '로딩중' : formatDateArray(data?.child_birthday || []);

    const handleEditClick = () => {
        setIsEditing(true);
        setName(data?.child_name);
        setNickname(data?.child_nickname);
        setBirthDate(childBirth);
        setGender(data?.child_gender);
        setPreviousImage(data?.child_picture || emptyImageUrl)
    };

    const handleGenderChange = (selectedGender: string) => {
        setGender(selectedGender);
    };

    const getGenderLabel = (gender1: string) => gender1 === 'M' ? '남자' : '여자';

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

                uploadMutate(formData, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onSuccess: (imagedata: any) => {
                        setChangeFile(imagedata)
                        // eslint-disable-next-line no-console
                        console.log(imagedata)
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

    const handleSaveClick = () => {
        setIsEditing(false);

        const updatedChildPicture = changeFile !== "" ? changeFile : previousImage;

        const UpdateProfile = {
            "child_seq": profile.child_seq,
            "child_name": name,
            "child_nickname": nickname,
            "child_birthday": birthDate,
            "child_gender": gender,
            "child_picture": updatedChildPicture,
        }

        try {
            updateMutate(UpdateProfile, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSuccess: (updatedata: any) => {
                    // eslint-disable-next-line no-console
                    console.log(updatedata)

                    // console.error(data)
                    setName(UpdateProfile.child_name)
                    setNickname(UpdateProfile.child_nickname);
                    setBirthDate(UpdateProfile.child_birthday);
                    setGender(UpdateProfile.child_gender);
                    setChangeFile(UpdateProfile.child_picture);

                    window.location.reload();
                },
            });
        } catch {
            // 에러
        }
    };

    return (
        <ProfileWrapper>
            <ProfileContent>
                {/* <Temp> */}
                <ProfileImage>
                    <ImageTest>
                        {isEditing ? (
                                <ProfileImage1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <input 
                                        id="file"
                                        name="file"
                                        type="file"
                                        style={{ display: "none" }} 
                                        accept="image/*"
                                        onChange={EditImage}
                                        ref={imgRef}
                                    />
                                    <Image src={imagePreview || data?.child_picture || emptyImage} alt="프로필사진" priority width="150" height="150" className="rounded-[100%] shadow-lg"/>
                                    <label htmlFor="file">
                                        {isHovered && (
                                            <div>
                                                <ProfileChange>
                                                    <CameraIcon fill="white" className="w-7 h-7"/>
                                                </ProfileChange>
                                            </div>
                                        )}
                                    </label>
                                </ProfileImage1>
                            ) : (
                            <ProfileImage1>
                                <Image src={data?.child_picture || emptyImage} alt="프로필사진" width="150" height="150" className="rounded-[100%] shadow-lg"/>
                            </ProfileImage1>
                        )}
                    </ImageTest>
                </ProfileImage>
                {/* </Temp> */}
                <Form>
                    <Name>
                        <Label>이름</Label>
                        {isEditing ? (
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        ) : (
                            <CurrentInfo>{data?.child_name || '로딩중'}</CurrentInfo>
                        )}
                    </Name>
                    <Nickname>
                        <Label>닉네임</Label>
                        {isEditing ? (
                            <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
                        ) : (
                            <CurrentInfo>{data?.child_nickname || '로딩중'}</CurrentInfo>
                        )}
                    </Nickname>
                    <Birth>
                        <Label>생년월일</Label>
                        {isEditing ? (
                            <InputBirth type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                        ) : (
                            <CurrentInfo>{childBirth}</CurrentInfo>
                        )}
                    </Birth>
                    <Gender>
                        <Label>성별</Label>
                        {isEditing ? (
                            <Btn>
                                <BtnLabel 
                                    className={`${gender === "M" ? "bg-[#EEA241] text-white" : ""} 
                                    ${gender === "M" ? "bg-[#EEA241] text-white" : ""}`} 
                                    onClick={() => handleGenderChange("M")}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="M"
                                        checked={gender === "M"}
                                        onChange={() => {}}
                                        className="sr-only"
                                    />
                                    남자
                                </BtnLabel>
                                <BtnLabel
                                    className={`${gender === "F" ? "bg-[#EEA241] text-white" : ""} 
                                    ${gender === "F" ? "bg-[#EEA241] text-white" : ""}`} 
                                    onClick={() => handleGenderChange("F")}
                                >
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="F"
                                            checked={gender === "F"}
                                            onChange={() => {}}
                                            className="sr-only"
                                        />
                                        여자
                                </BtnLabel>
                            </Btn>
                            ) : (
                            <CurrentInfo>{getGenderLabel(data?.child_gender)}</CurrentInfo>
                            )}
                    </Gender>
                </Form>
            </ProfileContent>
            <ProfileEdit>
                {isEditing ? (
                        <EditBtn onClick={handleSaveClick}>수정완료</EditBtn>
                    ) : (
                        <EditBtn onClick={handleEditClick}>수정하기</EditBtn>
                )}
            </ProfileEdit>
        </ProfileWrapper>
    )
};