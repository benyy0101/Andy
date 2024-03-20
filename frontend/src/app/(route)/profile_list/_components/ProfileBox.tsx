"use client";

import { useProfileList } from "@/app/hooks/useProfile";
import React, { useEffect } from "react";

function ProfileBox() {
  const { data } = useProfileList();
  useEffect(() => {
    if (data) {
      // eslint-disable-next-line no-console
      console.log(data);
    }
  }, [data]);
  return <div>ProfileBox</div>;
}

export default ProfileBox;
