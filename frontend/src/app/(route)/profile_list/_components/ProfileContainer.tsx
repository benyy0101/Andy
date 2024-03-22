"use client";

import React from "react";
import { motion } from "framer-motion";
import Profile from "./profile";

const mockData = [
  {
    child_seq: "1",
    child_name: "박수민",
    child_picture: "",
  },
  {
    child_seq: "2",
    child_name: "김아린",
    child_picture: "",
  },
  {
    child_seq: "3",
    child_name: "이동훈",
    child_picture: "",
  },
];

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

  return (
    <motion.div
      className="container flex justify-center items-center w-full h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {mockData.map((profile) => (
        <motion.div key={profile.child_seq} className="item" variants={item}>
          <Profile key={profile.child_seq} profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProfileContainer;
