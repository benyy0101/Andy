'use client'

import { useState } from "react"
import { ProfileWrapper, ProfileImage, Form, Input, InputBirth, Label, Name, Nickname, Birth, Gender, Btn, Boy, Girl, EditBtn, ProfileContent, ProfileEdit, ImageTest, CurrentInfo } from "../styles/Page.styled"

const TestData = {
    "name": '김태수',
    "nickname": '태수',
    "birthday": '2020-03-05',
    "gender": '남자',
}


export default function ProfileBox() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(TestData.name);
    const [nickname, setNickname] = useState(TestData.nickname);
    const [birthDate, setBirthDate] = useState(TestData.birthday);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // 수정 코드
    };

    return (
        <ProfileWrapper>
            <ProfileContent>
                <ProfileImage>
                    <ImageTest />
                </ProfileImage>
                <Form>
                    <Name>
                        <Label>이름</Label>
                        {isEditing ? (
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        ) : (
                            <CurrentInfo>{TestData.name}</CurrentInfo>
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
                                <Boy>남자</Boy>
                                <Girl>여자</Girl>
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