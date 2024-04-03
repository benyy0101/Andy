"use client"

import React from "react"
import { TutorialModalBg, Title, Btn, ModalHeader, TutorialModalWrapper, ModalScrollbar } from "../styles/Page.styled"
import Quiz1 from "../../tutorial/_components/Quiz1";
import Quiz2 from "../../tutorial/_components/Quiz2";
import Review from "../../tutorial/_components/Review";
// import TutorialContainer from "../../tutorial/_components/TutorialContainer";

interface ShowModalprops {
    showModal: boolean
    setShowModal: (show: boolean) => void;
}

export default function TutorialModal(props: ShowModalprops) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { showModal, setShowModal} = props;

    const closemodal = () => {
        setShowModal(false);
    }
  
    return (
        <TutorialModalBg>
            <TutorialModalWrapper>
                    <ModalHeader>
                        <Title>ANDY 이용 가이드</Title>
                        <Btn onClick={closemodal}>X</Btn>
                    </ModalHeader>
                    <ModalScrollbar>
                            <Quiz1 opacity={1} />
                            <Quiz2 opacity={1}/>
                            <Review opacity={1}/>
                            {/* <TutorialContainer /> */}
                    </ModalScrollbar>
            </TutorialModalWrapper>
        </TutorialModalBg>
    );
}
