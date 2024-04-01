'use client'

import { UserCircleIcon } from "@heroicons/react/24/solid"
import { ProfileModalBg, ProfileModalWrapper, Icon, Alert, BtnWrapper, ClickBtn, BackBtn } from "../styles/Page.styled"
import { useRemoveProfile } from "../../../hooks/useProfile"

// interface IProfile {
//     profile: {
//       child_seq: string;
//       child_name: string;
//       child_picture: string;
//     };
//   }

interface DeleteModalprops {
    showDeleteModal: boolean
    setShowDeleteModal: (show: boolean) => void;
    selectChild: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProfileDeleteModal(props : DeleteModalprops) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { showDeleteModal, setShowDeleteModal, selectChild } = props;
    const { mutate } = useRemoveProfile();

    const clickdelete = () => {
        mutate(selectChild, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSuccess: () => {
                setShowDeleteModal(false);
                window.location.reload();
            },
          });
    }

    const clickclose = () => {
        setShowDeleteModal(false);
    }

    return (
        <ProfileModalBg>
            <ProfileModalWrapper>
                <Icon><UserCircleIcon style={{ width: "70px", height: "70px", fill: "#EEA241"}}/></Icon>
                <Alert>프로필을 삭제하시겠습니까?</Alert>
                <BtnWrapper>
                    <BackBtn onClick={clickclose}>취소</BackBtn>
                    <ClickBtn onClick={clickdelete}>삭제</ClickBtn>
                </BtnWrapper>
            </ProfileModalWrapper>
        </ProfileModalBg>
    )
};