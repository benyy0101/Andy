import { getCategories } from "@/app/api/game";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/utils/queryClient";
import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import Footer from "@/app/_components/footer/Footer";
import Categories from "./_components/Categories";

async function CategoryPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col">
        <Navigation />
        <Categories />
      </div>
      <BackgroundSVG />
      <Footer />
    </HydrationBoundary>
  );
}

export default CategoryPage;
