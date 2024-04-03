'use client'

import { useState } from "react"
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import Logo from "../../_components/logo/Logo"
import ProfileImg from "./_components/profile_img"
import ProfileForm from "./_components/profile_form"
// import { useProfileList } from "../../hooks/useProfile";
// import { Tutorial_Btn } from "../../_components/tutorial_btn/tutorial_btn";
import { Wrapper, ProfileWrapper, ProfileListBtn, LogoWrapper } from "./styles/Page.styled";
import BackgroundSVG from "../../_components/background/Background";

export default function ProfileAdd() {
    const [imageUrl, setImageUrl] = useState<string>("");
    // const { data } = useProfileList();
    // const router = useRouter();

    const routetoProfileList = () => {
       window.location.href = "/profile_list";
    };

    const handleImageUpload = (res: string) => {
        setImageUrl(res);
    };

    return (
        <>
        <LogoWrapper>
            <Logo />
        </LogoWrapper>
        <Wrapper>
            <BackgroundSVG />
            <ProfileWrapper>
                <ProfileImg onImageUpload={handleImageUpload}/>
                <ProfileForm imageUrl={imageUrl} />
            </ProfileWrapper>
            {/* <Tutorial_Btn /> */}
        </Wrapper>
        <ProfileListBtn>
            <ArrowLeftStartOnRectangleIcon style={{ width: "30px", height: "30px", cursor: "pointer"}} onClick = {routetoProfileList}/>
        </ProfileListBtn>
        </>
    )
};