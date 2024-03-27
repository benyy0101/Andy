import getQueryClient from "@/app/utils/queryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";
import Quiz1 from "./_components/Quiz1";

function page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Quiz1 />
    </HydrationBoundary>
  );
}

export default page;
