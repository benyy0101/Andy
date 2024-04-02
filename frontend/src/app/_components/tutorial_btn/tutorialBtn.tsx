// import Image from "next/image";
// import question_mark from "@/app/assets/img/question_mark.png"

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
import TutorialModal from "@/app/(route)/main_quiz/_components/TutorialModal";
import { Btn, Ment } from "./styles/TutorialBtn.styled";

const modal = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1
  }
}

function TutorialBtn() {
  // const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const handleTutorial = () => {
    setShowModal(true);
  }

  // const routetoTutorial = () => {
  //   router.push("/tutorial");
  // };

  return (
    <>
    {/* <Ment1 /> */}
    <Ment>도움말</Ment>
    <Btn onClick={handleTutorial}>?</Btn>
    {showModal &&
        <motion.div
        className="flex"
        variants={modal}
        initial="hidden"
        animate="visible"
        style={{ position: "absolute", width: "92%", height: "90%" }}
      >
        <TutorialModal showModal={showModal} setShowModal={setShowModal}/>
      </motion.div>
    }
    </>
    // <Image src={question_mark} alt="튜토리얼 버튼"/>
  );
}

export default TutorialBtn;
