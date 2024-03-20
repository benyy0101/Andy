'use client'

import TutorialBtn from "@/app/_components/tutorial_btn/tutorialBtn";
import Logo from "../../_components/logo/Logo"
import Profile from "./_components/profile"
import ProfileAdd from "./_components/profile_add"
import { Wrapper, Profiles } from "./styles/Page.styled";

export default function ProfileList() {



    return (
        <Wrapper>
            <Logo />
            <Profiles>
                <Profile />
                <ProfileAdd />
            </Profiles>
            <TutorialBtn />
        </Wrapper>
    )
};