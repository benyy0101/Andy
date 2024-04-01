'use client'

import { useRouter } from "next/navigation"
import { AddProfileWrapper, ProfileImg, ProfileName } from "../styles/Page.styled"

interface ProfileAddProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    LengthData: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AddProfile({ showModal, setShowModal, LengthData }:ProfileAddProps) {
    const router = useRouter();

    const routetoProfileAdd = () => {
        if (LengthData === 5) {
            setShowModal(true);
        } else {
            router.push('/profile_add')
        }
    }

    return (
        <AddProfileWrapper>
            <ProfileImg onClick={routetoProfileAdd}>
                {/* <img src={plus_icon}></img> */} +
            </ProfileImg>
            <ProfileName style={{ marginBottom: "55px"}}>프로필 추가</ProfileName>
        </AddProfileWrapper>
    )
};