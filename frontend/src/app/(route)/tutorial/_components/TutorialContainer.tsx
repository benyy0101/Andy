'use client'

import React from "react";
import { TutorialContainerWrapper } from "../styles/pages.styled";
// import TutorialDesc from "./TutorialDes";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import Review from "./Review"

export default function TutorialContainer(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [opacity, setOpacity] = useState({
    //   quiz1: 1,
    //   quiz2: 0,
    //   review: 0,
    // });

    // const handleScroll = () => {
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   const cutHeight = window.innerHeight - 64;
    //   const halfCutHeight = cutHeight / 2;

    //   setOpacity({
    //     quiz1: Math.max(0, 1 - scrollTop / halfCutHeight),
    //     quiz2: Math.max(0, 1 - Math.abs(scrollTop - cutHeight) / halfCutHeight),
    //     review: Math.max(0, 1 - Math.abs(scrollTop - 2 * cutHeight) / halfCutHeight),
    //   });
    // };

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [currentSection, setCurrentSection] = useState(0);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const windowHeight = window.innerHeight;
    //     const scrollPosition = window.scrollY;

    //     const sectionHeight = windowHeight - 64; // Adjusted according to your design
    //     const newSection = Math.floor(scrollPosition / sectionHeight);

    //     setCurrentSection(newSection);
    //   };

    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    return(
        <TutorialContainerWrapper>
          {/* <ModalScrollbar> */}
            {/* {TutorialDes.map((des) => (
                <TutorialDesc
                    key={des.quizName}
                    quizName={des.quizName}
                    quizDes={des.quizdes as React.JSX.Element}
                    // quizImg={des.quizImg}
                />
            ))} */}
            {/* <Quiz1 opacity={opacity.quiz1} />
            <Quiz2 opacity={opacity.quiz2} />
            <Review opacity={opacity.review}/> */}
            <Quiz1 opacity={1} />
            <Quiz2 opacity={1} />
            <Review opacity={1}/>
          {/* </ModalScrollbar> */}
        </TutorialContainerWrapper>
    );
};
