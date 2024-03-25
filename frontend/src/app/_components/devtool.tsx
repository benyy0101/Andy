"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function Devtool() {
  const params = useSearchParams();
  const isDevOn: boolean = params.get("queryDev") === "true";

  return (
    <Suspense>
      {isDevOn && <ReactQueryDevtools initialIsOpen={isDevOn} />}
    </Suspense>
  );
}

export default Devtool;
