'use client'

import { UserCircleIcon } from "@heroicons/react/24/solid"
import { ProfileModalBg, ProfileModalWrapper, Icon, Alert, Btn } from "../styles/Page.styled"

interface ProfileModalprops {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProfileModal({showModal, setShowModal} : ProfileModalprops) {

    const clickButton = () => {
        setShowModal(false);
    }

    return (
        <ProfileModalBg>
            <ProfileModalWrapper>
                <Icon><UserCircleIcon style={{ width: "70px", height: "70px", fill: "#EEA241"}}/></Icon>
                <Alert>프로필은 최대 5개까지만<br/>생성 가능합니다.</Alert>
                <Btn onClick={clickButton}>확인</Btn>
            </ProfileModalWrapper>
        </ProfileModalBg>
    )
};