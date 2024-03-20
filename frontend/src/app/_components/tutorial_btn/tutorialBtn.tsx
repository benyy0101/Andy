// import Image from "next/image";
// import question_mark from "@/app/assets/img/question_mark.png"

import React from "react";
import { useRouter } from "next/navigation";
import { Btn } from "./styles/TutorialBtn.styled";

function TutorialBtn() {
  
  const router = useRouter();

  const routetoTutorial = () => {
      router.push('/tutorial')
  };


  return (
    <Btn onClick={routetoTutorial}>?</Btn>
    // <Image src={question_mark} alt="튜토리얼 버튼"/>
  );
}

export default TutorialBtn


