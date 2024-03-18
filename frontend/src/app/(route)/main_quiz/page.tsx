import Logo from "../../_components/logo/Logo";
import Quiz1Btn from "./_components/quiz1_btn";
import Quiz2Btn from "./_components/quiz2_btn";
import StudyBtn from "./_components/study_btn";
// import { My_profile } from "../../_components/my_profile/MyProfile"
import { Wrapper, Btn } from "./styles/Page.styled";

export default function MainQuiz() {
    return (
        <Wrapper>
            <Logo />
            {/* <My_profile /> */}
            <Btn>
                <Quiz1Btn />
                <Quiz2Btn />
                <StudyBtn />
            </Btn>
        </Wrapper>
    )
};