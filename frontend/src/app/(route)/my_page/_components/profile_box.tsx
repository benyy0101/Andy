'use client'

import { useState } from "react"
import Image from "next/image";
// import { CameraIcon } from '@heroicons/react/24/solid';
import storeProfile from "@/app/_store/storeProfile"
// import styled from "styled-components";
import { ProfileWrapper, ProfileImage, Form, Input, InputBirth, Label, Name, Nickname, Birth, Gender, EditBtn, ProfileContent, ProfileEdit, ImageTest, CurrentInfo, Btn, BtnLabel} from "../styles/Page.styled"
// import { useUpdateProfile } from "../../../hooks/useProfile"
import { useGetProfile } from "../../../hooks/useProfile"

const TestData = {
//   child_seq: ""
  child_name: "김태수",
  nickname: "태수",
  birthday: "2020-03-05",
  gender: "남자",
};

export default function ProfileBox() {
    const [isEditing, setIsEditing] = useState(false);
    const { profile } = storeProfile();
    const [name, setName] = useState(profile.childName);
    const [nickname, setNickname] = useState(TestData.nickname);
    const [birthDate, setBirthDate] = useState(TestData.birthday);
    const [gender, setGender] = useState(TestData.gender);
    // const [isHovered, setIsHovered] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [selectedGender, setSelectedGender] = useState(TestData.gender); // 새로운 상태 추가
    // const [updateInfo, setUpdatedInfo] = useState(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [selectedFile, setSelectedFile] = useState<File>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [imagePreview, setImagePreview] = useState<string>("");
    // const { mutate } = useUploadProfileImage();
    // const imgRef = useRef<HTMLInputElement>(null);

    const childnum = String(profile.childSeq);
    const { data } = useGetProfile(childnum);
    // eslint-disable-next-line no-console, no-console
    console.log(data)
    // eslint-disable-next-line no-console, no-console
    // console.log(data.child_name)
    // eslint-disable-next-line no-console, no-console
    // console.log(profile)

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleGenderChange = (selectedGender: string) => {
        setGender(selectedGender);
    };

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    // eslint-disable-next-line no-console
    // console.log(name, nickname, birthDate, gender)


    // const MAX_FILE_SIZE = 5 * 1024 * 1024;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const EditImage = (e: any) => {
    //     e.preventDefault();
    //     const file = e.target.files[0];

    //     if (!file) {
    //         return;
    //     }

    //     if (file && file.size > MAX_FILE_SIZE) {
    //         // eslint-disable-next-line no-alert
    //         alert('파일 크기는 5MB 이하여야 합니다.');
    //         return;
    //     }

    //     setSelectedFile(file);

    //     // 미리보기
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setImagePreview(reader.result as string);
    //     };

    //     if (file !== undefined) {
    //         try{
    //             const formData = new FormData();
    //             formData.append('profileImageFile', file)

    //             mutate(formData, {
    //                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //                 onSuccess: (imagedata: any) => {
    //                     // eslint-disable-next-line no-console
    //                     console.log(imagedata)
    //                 },
    //             });

    //         } catch {
    //             // alert("프로필 이미지 변경에 실패하였습니다.")
    //         }
    //     } else {
    //         // eslint-disable-next-line no-alert
    //         alert("파일을 찾을 수 없습니다.")
    //     }
    // }

    const handleSaveClick = () => {
        setIsEditing(false);
        // 수정 코드

        // const UpdateProfile = {
        //     // "child_seq": profile.childSeq,
        //     "child_name": name,
        //     "child_nickname": nickname,
        //     "child_birthday": birthDate,
        //     "child_gender": gender,
        //     // "child_picture": string,
        // }

        // const { data } = useUpdateProfile(UpdateProfile);
        // setUpdatedInfo(data);
    };

    return (
        <ProfileWrapper>
            <ProfileContent>
                <ProfileImage>
                    <ImageTest>
                        {isEditing ? (
                                // <ProfileImage1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                // <input 
                                //     id="file"
                                //     name="file"
                                //     type="file"
                                //     style={{ display: "none" }} 
                                //     accept="image/*"
                                //     onChange={EditImage}
                                //     ref={imgRef}
                                // />
                                // <Image src={profile.childPicture} alt="프로필사진" width="150" height="150" className="rounded-[100%] shadow-lg"/>
                                // <label htmlFor="file">
                                //     {isHovered && (
                                //         <div>
                                //             <ProfileChange>
                                //                 <CameraIcon fill="white" className="w-7 h-7"/>
                                //             </ProfileChange>
                                //         </div>
                                //     )}
                                // </label>
                                // </ProfileImage1>
                                <Image src={profile.childPicture} alt="프로필사진" width="150" height="150" className="rounded-[100%] shadow-lg"/>
                            ) : (
                            <Image src={profile.childPicture} alt="프로필사진" width="150" height="150" className="rounded-[100%] shadow-lg"/>
                            // <div>프로필</div>
                        )}
                    </ImageTest>
                </ProfileImage>
                <Form>
                    <Name>
                        <Label>이름</Label>
                        {isEditing ? (
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        ) : (
                            <CurrentInfo>{profile.childName}</CurrentInfo>
                            // <CurrentInfo>
                            //     {updatedInfo ? updatedInfo.child_name : TestData.child_name}
                            // </CurrentInfo>
                        )}
                    </Name>
                    <Nickname>
                        <Label>닉네임</Label>
                        {isEditing ? (
                            <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
                        ) : (
                            <CurrentInfo>{TestData.nickname}</CurrentInfo>
                        )}
                    </Nickname>
                    <Birth>
                        <Label>생년월일</Label>
                        {isEditing ? (
                            <InputBirth type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                        ) : (
                            <CurrentInfo>{TestData.birthday}</CurrentInfo>
                        )}
                    </Birth>
                    <Gender>
                        <Label>성별</Label>
                        {isEditing ? (
                            <Btn>
                                <BtnLabel 
                                    className={`${TestData.gender === "M" ? "bg-[#EEA241] text-white" : ""} 
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
                                    className={`${TestData.gender === "F" ? "bg-[#EEA241] text-white" : ""} 
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
                            <CurrentInfo>{TestData.gender}</CurrentInfo>
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