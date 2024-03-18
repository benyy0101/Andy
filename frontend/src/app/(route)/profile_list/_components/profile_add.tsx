'use client'

import { useRouter } from "next/navigation"
import { AddProfileWrapper, ProfileImg, ProfileName } from "../styles/Page.styled"

export default function AddProfile() {
    const router = useRouter();

    const routetoProfileAdd = () => {
        router.push('/profile_add')
    }

    return (
        <AddProfileWrapper>
            <ProfileImg onClick={routetoProfileAdd}>
                {/* <img src={plus_icon}></img> */} +
            </ProfileImg>
            <ProfileName>프로필 추가</ProfileName>
        </AddProfileWrapper>
    )
};