import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import CategoryGrid from "@/components/home/CategoryGrid";
import LatestInsights from "@/components/home/LatestInsights";
import CategorySpotlights from "@/components/home/CategorySpotlights";
import EditorsPicks from "@/components/home/EditorsPicks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <CategoryGrid />
      <LatestInsights />
      <CategorySpotlights />
      <EditorsPicks />
    </>
  );
}
