'use client'

import { useRouter } from "next/navigation"
import { PlusIcon } from "@heroicons/react/24/solid"
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
                <PlusIcon style={{ width: "50px", height: "50px" }}/>
            </ProfileImg>
            <ProfileName style={{ marginBottom: "55px"}}>프로필 추가</ProfileName>
        </AddProfileWrapper>
    )
};