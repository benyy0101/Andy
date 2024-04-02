/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useProfileList } from "@/app/hooks/useProfile";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Profile from "./profile";
import ProfileAdd from "./profile_add";
import { ScrollButton, ProfilesContainer } from "../styles/Page.styled"
import ProfileModal from "./profile_modal";
import ProfileDeleteModal from "./profile_delete_modal";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const modal = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1
  }
}

function ProfileContainer() {
  const { data } = useProfileList();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobileScreen1, setIsMobileScreen1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [ITEMS_PER_PAGE, setItemsPerPage] = useState(4); // 기본값 4

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileScreen(window.innerWidth < 475);
  //     setIsMobileScreen1(window.innerWidth < 750);
  //     setItemsPerPage(window.innerWidth < 750 ? 3 : 4);
  //     setItemsPerPage(window.innerWidth < 475 ? 1 : 4);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobileScreen(screenWidth < 475);
  
      if (screenWidth < 700) {
        setItemsPerPage(1);
      } else if (screenWidth < 900) {
        setItemsPerPage(2);
      } else if (screenWidth < 1250) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectChild, setSelectChild] = useState(0);
  const LengthData = data?.length || 0;

  // eslint-disable-next-line no-console
  // console.log(LengthData)
  const totalPages = Math.ceil((LengthData + 1) / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIdx = currentPage * ITEMS_PER_PAGE;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, LengthData + 1);
  const ViewProfiles = data?.slice(startIdx, endIdx);

  return (
    <Suspense
      fallback={
        <div>
          로딩중
        </div>
      }
    >
      <ScrollButton onClick={handlePrevPage}>
        <ChevronLeftIcon style={{ width: "30px", height:"30px" }}/>
      </ScrollButton>
      <ProfilesContainer id="profiles-container">
        <motion.div
          className="flex"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {ViewProfiles &&
              ViewProfiles.map((profile: any) => (
                <motion.div
                  key={profile.child_seq}
                  className="item"
                  variants={item}
                >
                  <Profile
                    profile={profile}
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                    setSelectChild = {setSelectChild}
                  />
                </motion.div>
              ))}
            {endIdx === LengthData + 1 && (
              // <motion.div className="item" variants={item}>
                <ProfileAdd showModal={showModal} setShowModal={setShowModal} LengthData={LengthData}/>
              // </motion.div>
            )}
        </motion.div>
      </ProfilesContainer>
      <ScrollButton onClick={handleNextPage}>
          <ChevronRightIcon style={{ width: "30px", height:"30px" }}/>
      </ScrollButton>
      {/* <ProfileAdd /> */}
      {showModal && 
        <motion.div
          className="modal"
          variants={modal}
          initial="hidden"
          animate="visible"
          style={{ position: "absolute", width: "90%", height: "80%" }}
        >
          <ProfileModal showModal={showModal} setShowModal={setShowModal}/>
        </motion.div>
      }
      {showDeleteModal && 
        <motion.div
          className="modal"
          variants={modal}
          initial="hidden"
          animate="visible"
          style={{ position: "absolute", width: "90%", height: "80%" }}
        >
          <ProfileDeleteModal 
            // profile={profile}
            selectChild = {selectChild}
            showDeleteModal={showDeleteModal} 
            setShowDeleteModal={setShowDeleteModal}
          />
        </motion.div>
      }
    </Suspense>
  );
}

export default ProfileContainer;
