'use client'

import { useState } from "react"
// import Image from "next/image";
import storeProfile from "@/app/_store/storeProfile"
// import styled from "styled-components";
import { ProfileWrapper, ProfileImage, Form, Input, InputBirth, Label, Name, Nickname, Birth, Gender, EditBtn, ProfileContent, ProfileEdit, ImageTest, CurrentInfo } from "../styles/Page.styled"
// import { useGetProfile } from "../../../hooks/useProfile"

const TestData = {
  child_name: "김태수",
  nickname: "태수",
  birthday: "2020-03-05",
  gender: "여자",
};

// const StyledButtonGroup = styled.div`
//   display: flex;
//   justify-content: end;
//   gap: 10px;
//   width: 100%;
// `;

// const StyledButton = styled.button<{ isselected: boolean }>`
//   padding: 10px 20px;
//   background-color: ${({ isselected }) => (isselected ? "gray" : "#e9e9e9")};
//   color: white;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: small;
//   width: 40%
// `;

export default function ProfileBox() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(TestData.child_name);
    const [nickname, setNickname] = useState(TestData.nickname);
    const [birthDate, setBirthDate] = useState(TestData.birthday);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [gender, setGender] = useState(TestData.gender);
    // const [selectedGender, setSelectedGender] = useState(TestData.gender); // 새로운 상태 추가
    const { profile } = storeProfile();
    // const [updateInfo, setUpdatedInfo] = useState(null);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    // const handleGenderChange = (selectedGender: string) => {
    //     setSelectedGender(selectedGender);
    // };

    const handleSaveClick = () => {
        setIsEditing(false);
        // setGender(selectedGender);
        // 수정 코드

        // const childGender = selectedGender === "여자" ? "F" : "M";

        // const UpdateProfile = {
        //     "child_seq": profile.childSeq,
        //     "child_name": name,
        //     "child_nickname": nickname,
        //     "child_birthday": birthDate,
        //     "child_gender": childGender,
        //     "child_picture": string,
        // }

        // const { data } = useUpdateProfile(UpdateProfile);
        // setUpdatedInfo(data);
    };

    // eslint-disable-next-line no-console
    console.log(profile)

    return (
        <ProfileWrapper>
            <ProfileContent>
                <ProfileImage>
                    <ImageTest>
                        {/* {isEditing ? (
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            ) : (
                            // <Image src={childpicture} alt="프로필사진"/>
                            <div>프로필</div>
                        )} */}
                    </ImageTest>
                </ProfileImage>
                <Form>
                    <Name>
                        <Label>이름</Label>
                        {isEditing ? (
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        ) : (
                            <CurrentInfo>{TestData.child_name}</CurrentInfo>
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
                            // <StyledButtonGroup>
                            //     {/* <StyledButton isselected={selectedGender === "남자"} onClick={() => handleGenderChange("남자")}> */}
                            //         남자
                            //     {/* </StyledButton> */}
                            //     {/* <StyledButton isselected={selectedGender === "여자"} onClick={() => handleGenderChange("여자")}> */}
                            //         여자
                            //     {/* </StyledButton> */}
                            // </StyledButtonGroup>
                            <div>수정중</div>
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