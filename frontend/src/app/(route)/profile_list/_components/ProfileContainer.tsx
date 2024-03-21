"use client";

import React, { useEffect } from "react";
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

function ProfileContainer() {
  //const { data } = useProfileList();

  return (
    <>
      {mockData.map((profile) => (
        <Profile key={profile.child_seq} profile={profile} />
      ))}
    </>
  );
}

export default ProfileContainer;
