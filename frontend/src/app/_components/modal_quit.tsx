import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuitImage from "@/app/asset/_img/quit.png";
import {QuitBackground, QuitBox, Asking, Warning, YesBtn, NoBtn} from "./styles/ModalQuit.styled";

interface WrongModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  

function QuitModal(props: WrongModalProps) {
    const { isOpen, onClose } = props;

    if (!isOpen) return null;

    return (
        <QuitBackground>
            <QuitBox>
            <Asking>게임을 나갈건가요?</Asking>
            <Warning>*퀴즈를 나가면 푼 문제는 저장이 안 돼요!</Warning>
            {/* 이미지 */}
            <div className="flex items-center justify-center">
              <Image src={QuitImage} alt="나가서 슬픔ㅜ" width="100" height="100" />
            </div>
            <br />
            
            <div className="flex w-50 justify-center gap-20 mt-3">
                <Link href="/category">
                {/* eslint-disable-next-line react/button-has-type */}
                <YesBtn>네</YesBtn>
                </Link>
                {/* eslint-disable-next-line react/button-has-type */}
                <NoBtn onClick={onClose}>아니오</NoBtn>
            </div>
            </QuitBox>
        </QuitBackground>
    );
}

export default QuitModal