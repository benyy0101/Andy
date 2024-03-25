/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { Suspense } from "react";
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
  // console.log(data);

  return (
    <Suspense
      fallback={
        <div>
          제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발제발
        </div>
      }
    >
      <motion.div
        className="container flex justify-center items-center w-full h-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data &&
          data.map((profile: any) => (
            <motion.div key={profile.child_seq} className="item" variants={item}>
              <Profile key={profile.child_seq} profile={profile} />
            </motion.div>
          ))}
      </motion.div>
    </Suspense>
  );
}

export default ProfileContainer;
