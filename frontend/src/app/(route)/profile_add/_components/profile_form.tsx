"use client";

import { useState } from "react"
// import { useRouter } from "next/navigation"
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
    BtnLabel,
    SubmitBtn,
  } from "../styles/Page.styled";
import { useCreateProfile } from "../../../hooks/useProfile"
// import testimage from "../../../asset/_img/smile_stamp.png"

export default function ProfileForm({ imageUrl }: { imageUrl: string }) {
    // const router = useRouter();
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

    const formSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ProfileData = {
            "child_name": name,
            "child_nickname": nickname,
            "child_birthday": birthday,
            "child_gender": gender,
            "child_picture": childpicture,
        }

        // eslint-disable-next-line no-console
        // console.log(name, nickname, birthday, gender, childpicture)

        try {
            mutate(ProfileData, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSuccess: (data: any) => {
                    // eslint-disable-next-line no-console
                    console.log(data)
                    // router.push('/profile_list');
                    window.location.href = '/profile_list';
                },
            });
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
                        <BtnLabel 
                            className={`${gender === "M" ? "bg-[#EEA241] text-white" : ""}`} 
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
                            className={`${gender === "F" ? "bg-[#EEA241] text-white" : ""}`} 
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
                </Gender>

                <SubmitBtn>프로필 생성하기</SubmitBtn>
            </Form>
        </div>
    )
};