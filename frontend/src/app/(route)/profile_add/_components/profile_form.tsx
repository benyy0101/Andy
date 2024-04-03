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
        if (field === "name" && (name.length >= 10)) {
            tempErrors.name = '* 이름은 10자를 넘길 수 없습니다.';
            // eslint-disable-next-line no-console
            console.log(name.length)
        } else if (field === "name") {
            tempErrors.name = '';
        }

        if (field === "nickname" && (nickname.length >= 20)) {
            tempErrors.nickname = '* 닉네임은 20자를 넘길 수 없습니다.';
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
            if (birthday.trim() === "") {
                tempErrors.birthday = '* 생년월일을 입력해주세요.';
            } else if (selectedDate > today) {
                tempErrors.birthday = '* 미래 날짜는 선택할 수 없습니다.';
            } else if (selectedDate < new Date("2000-01-01")) {
                tempErrors.birthday = '* 2000년 1월 1일 이후의 날짜를 선택해주세요.';
            } else {
                tempErrors.birthday = '';
            }

            return;
        }

        setErrors(tempErrors);
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        validate("gender");

        if (name.trim() === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                name: '* 이름을 입력해주세요',
            }));
            return;
        // eslint-disable-next-line no-else-return
        } else {
            // 이름이 입력되어 있을 때에만 나머지 에러를 검사하도록 수정
            setErrors(prevErrors => ({
                ...prevErrors,
                name: '',
            }));
        }
        
    
        if (nickname.trim() === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                nickname: '* 닉네임을 입력해주세요',
            }));
            return;
        // eslint-disable-next-line no-else-return
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                nickname: '',
            }));
        }

        const today = new Date();
        const selectedDate = new Date(birthday);

        if (birthday.trim() === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                birthday: '* 생년월일을 입력해주세요',
            }));
            return;
        // eslint-disable-next-line no-else-return
        } else if (selectedDate > today) {
            setErrors(prevErrors => ({
                ...prevErrors,
                birthday: '미래 날짜는 선택할 수 없습니다.',
            }));
            return;
        } else if (selectedDate < new Date("2000-01-01")){
            setErrors(prevErrors => ({
                ...prevErrors,
                birthday: '2000년 1월 1일 이후의 날짜를 선택해주세요.',
            }));
            return;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                birthday: '',
            }));
        }

        const profileImageUrl = imageUrl || childpicture;

        const ProfileData = {
            "child_name": name,
            "child_nickname": nickname,
            "child_birthday": birthday,
            "child_gender": gender,
            "child_picture": profileImageUrl,
        }

        // eslint-disable-next-line no-console
        // console.log(ProfileData)

        try {
            mutate(ProfileData, {
                onSuccess: () => {
                    // eslint-disable-next-line no-console
                    window.location.href = '/profile_list';
                    // eslint-disable-next-line no-console
                    // console.log(ProfileData)
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
                    <Input value={name} onChange={(e) => { 
                            if(e.target.value.length <= 10) { 
                                setName(e.target.value); 
                            }
                            validate("name"); 
                        }}  />
                </Name>
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                <Nickname>
                    <Label>닉네임</Label>
                    <Input value={nickname}
                    // maxLength={5}
                    onChange={(e) => { 
                        if(e.target.value.length <= 20) {
                            setNickname(e.target.value); 
                        }
                        validate("nickname"); 
                    }}  />
                </Nickname>
                {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
                <Birth>
                    <Label>생년월일</Label>
                    <InputBirth type="date" value={birthday}
                        // max={`${new Date().getFullYear()}-12-31`}
                        // min="2000-01-01"
                        onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            const today = new Date();
                            validate("birthday"); 
                            if (selectedDate < today) {
                                // eslint-disable-next-line no-console
                                setBirthday(e.target.value); 
                            }
                            // validate("birthday"); 
                        }}  />
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
