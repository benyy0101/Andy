"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    Form,
    Label,
    Input,
    InputBirth,
    Name,
    Nickname,
    Birth,
    Gender,
    Btn,
    Girl,
    Boy,
    SubmitBtn,
  } from "../styles/Page.styled";
import { useCreateProfile } from "../../../hooks/useProfile"
import testimage from "../../../asset/_img/smile_stamp.png"

export default function ProfileForm({ imageUrl }: { imageUrl: string }) {
    const router = useRouter();
    const { mutate } = useCreateProfile();

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    };

    const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value);
    };

    const handleGenderChange = (selectedGender: string) => {
        setGender(selectedGender);
    };

    const childpicture = imageUrl;

    console.log(name, nickname, birthday, gender, testimage)

    const formSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ProfileData = {
            // "kakao_id": "",
            "child_name": name,
            "child_nickname": nickname,
            "child_birthday": birthday,
            "child_gender": gender,
            "child_picture": testimage,
        }

        try {
            const res = mutate(ProfileData)

            console.log(res)
            if (res != null) {
                router.push("/profile_list")
            } else {
                // 에러
            }   
        } catch {
            // 에러
        }
    }

    return (
        <div>
            <Form onSubmit = {formSubmit}>
                <Name>
                    <Label>이름</Label>
                    <Input value={name} onChange={handleNameChange}/>
                </Name>
                <Nickname>
                    <Label>닉네임</Label>
                    <Input value={nickname} onChange={handleNicknameChange}/>
                </Nickname>
                <Birth>
                    <Label>생년월일</Label>
                    <InputBirth type="date" value={birthday} onChange={handleBirthdayChange}/>
                </Birth>
                <Gender>
                    <Label>성별</Label>
                    <Btn>
                        <Boy
                            className={gender === "M" ? "active" : ""} 
                            onClick={() => handleGenderChange("M")}>
                            남자
                        </Boy>
                        <Girl 
                            className={gender === "F" ? "active" : ""} 
                            onClick={() => handleGenderChange("F")}>
                            여자
                        </Girl>
                    </Btn>
                </Gender>

                <SubmitBtn>프로필 생성하기</SubmitBtn>
            </Form>
        </div>
    )
};