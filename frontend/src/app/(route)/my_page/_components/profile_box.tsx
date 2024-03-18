'use client'

import { ProfileWrapper, ProfileImage, Form, Input, InputBirth, Label, Name, Nickname, Birth, Gender, Btn, Boy, Girl } from "../styles/Page.styled"

export default function ProfileBox() {
    return (
        <ProfileWrapper>
            <ProfileImage />
            <Form>
                <Name>
                    <Label>이름</Label>
                    <Input />
                </Name>
                <Nickname>
                    <Label>닉네임</Label>
                    <Input />
                </Nickname>
                <Birth>
                    <Label>생년월일</Label>
                    <InputBirth type="date" />
                </Birth>
                <Gender>
                    <Label>성별</Label>
                    <Btn>
                        <Boy>남자</Boy>
                        <Girl>여자</Girl>
                    </Btn>
                </Gender>
            </Form>
        </ProfileWrapper>
    )
};