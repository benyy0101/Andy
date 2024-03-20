'use client'

import { useState } from "react"
import Logo from "../../_components/logo/Logo"
import ProfileImg from "./_components/profile_img"
import ProfileForm from "./_components/profile_form"
// import { Tutorial_Btn } from "../../_components/tutorial_btn/tutorial_btn";
import { Wrapper, ProfileWrapper } from "./styles/Page.styled";

export default function ProfileAdd() {
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleImageUpload = (res: string) => {
        setImageUrl(res);
    };

    return (
        <Wrapper>
            <Logo />
            <ProfileWrapper>
                <ProfileImg onImageUpload={handleImageUpload}/>
                <ProfileForm imageUrl={imageUrl} />
            </ProfileWrapper>
            {/* <Tutorial_Btn /> */}
        </Wrapper>
    )
};