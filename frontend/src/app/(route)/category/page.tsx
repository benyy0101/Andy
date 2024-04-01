import { getCategories } from "@/app/api/game";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/utils/queryClient";
import BackgroundSVG from "@/app/_components/background/Background";
import Categories from "./_components/Categories";

async function CategoryPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BackgroundSVG />
      <Categories />
    </HydrationBoundary>
  );
}

export default CategoryPage;
