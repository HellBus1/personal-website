import BaseLayout from "./components/Layout/BaseLayout";
import FeaturedBlogSection from "./components/Section/FeaturedBlogSection";
import FeaturedProjectSection from "./components/Section/FeaturedProjectSection";
import OverviewSection from "./components/Section/OverviewSection";

export default function Page() {
  return (
    <BaseLayout>
      <OverviewSection />
      <FeaturedBlogSection />
      <FeaturedProjectSection />
    </BaseLayout>
  );
}
