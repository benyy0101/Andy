"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useProfileList } from "@/app/hooks/useProfile";
import Profile from "./profile";


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

function ProfileContainer() {
  const { data } = useProfileList();

  // eslint-disable-next-line no-console
  console.log(data)

  return (
    <motion.div
      className="container flex justify-center items-center w-full h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {data.map((profile) => (
        <motion.div key={profile.childSeq} className="item" variants={item}>
          <Profile key={profile.childSeq} profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProfileContainer;
