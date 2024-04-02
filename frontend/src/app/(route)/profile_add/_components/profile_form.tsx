import { useState } from "react"
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
    ErrorMessage,
} from "../styles/Page.styled";
import { useCreateProfile } from "../../../hooks/useProfile"

export default function ProfileForm({ imageUrl }: { imageUrl: string }) {
    const { mutate } = useCreateProfile();

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState({ name: '', nickname: '', gender: '', birthday: '' });

    // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

    // const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNickname(e.target.value);
    // };

    // const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setBirthday(e.target.value);
    // };

    // const handleGenderChange = (selectedGender: string) => {
    //     setGender(selectedGender);
    // };

    const childpicture = imageUrl;

    // eslint-disable-next-line no-console
    console.log(name, nickname, birthday, gender, childpicture)

    const validate = (field: string) => {
        const tempErrors = { ...errors };
        if (field === "name" && (name.length > 25)) {
            tempErrors.name = '* 이름은 25자를 넘길 수 없습니다.';
        } else if (field === "name") {
            tempErrors.name = '';
        }

        if (field === "nickname" && (nickname.length > 25)) {
            tempErrors.nickname = '* 닉네임은 25자를 넘길 수 없습니다.';
        } else if (field === "nickname") {
            tempErrors.nickname = '';
        }

        if (field === "gender" && gender === '') {
            tempErrors.gender = '* 성별을 선택해주세요.';
        } else if (field === "gender") {
            tempErrors.gender = '';
        }

        if (field === "birthday") {
            const today = new Date();
            const selectedDate = new Date(birthday);
            if (birthday !== "" && selectedDate > today) {
                tempErrors.birthday = '* 미래 날짜는 선택할 수 없습니다.';
            } else {
                tempErrors.birthday = '';
            }
        }

        setErrors(tempErrors);
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validate("gender");

        if (!Object.values(errors).every(x => x === "")) return;

        const profileImageUrl = imageUrl || childpicture;

        const ProfileData = {
            "child_name": name,
            "child_nickname": nickname,
            "child_birthday": birthday,
            "child_gender": gender,
            "child_picture": profileImageUrl,
        }

        try {
            mutate(ProfileData, {
                onSuccess: () => {
                    // eslint-disable-next-line no-console
                    window.location.href = '/profile_list';
                },
            });
        } catch {
            // 에러 처리
        }
    }

    return (
        <div>
            <Form onSubmit={formSubmit}>
                <Name>
                    <Label>이름</Label>
                    <Input value={name} onChange={(e) => { setName(e.target.value); validate("name"); }} />
                </Name>
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                <Nickname>
                    <Label>닉네임</Label>
                    <Input value={nickname} onChange={(e) => { setNickname(e.target.value); validate("nickname"); }} />
                </Nickname>
                {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
                <Birth>
                    <Label>생년월일</Label>
                    <InputBirth type="date" value={birthday} onChange={(e) => { setBirthday(e.target.value); validate("birthday"); }} />
                </Birth>
                {errors.birthday && <ErrorMessage>{errors.birthday}</ErrorMessage>}
                <Gender>
                    <Label>성별</Label>
                    <Btn>
                        <BtnLabel
                            className={`${gender === "M" ? "bg-[#EEA241] text-white" : ""}`}
                            onClick={() => setGender("M")}
                        >
                            남자
                        </BtnLabel>
                        <BtnLabel
                            className={`${gender === "F" ? "bg-[#EEA241] text-white" : ""}`}
                            onClick={() => setGender("F")}
                        >
                            여자
                        </BtnLabel>
                    </Btn>
                </Gender>
                {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
                <SubmitBtn>프로필 생성하기</SubmitBtn>
            </Form>
        </div>
    )
};
