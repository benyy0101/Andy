"use client";

import { useRouter } from "next/navigation";
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

// export const ProfileForm: React.FC = () => {
export default function ProfileForm() {
  const router = useRouter();

  const routetoProfileList = () => {
    router.push("/profile_list");
  };

  return (
    <div>
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
          {/* <InputYear placeholder="YYYY" maxLength={4} />
                        <InputMonth placeholder="MM" maxLength={2}/>
                        <InputDay placeholder="DD" maxLength={2}/> */}
        </Birth>
        <Gender>
          <Label>성별</Label>
          <Btn>
            <Boy>남자</Boy>
            <Girl>여자</Girl>
          </Btn>
        </Gender>

        <SubmitBtn onClick={routetoProfileList}>프로필 생성하기</SubmitBtn>
      </Form>
    </div>
  );
}
