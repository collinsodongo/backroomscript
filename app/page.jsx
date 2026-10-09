import HomeSection from "@/app/components/HomeSection";
import StepsSection from "@/app/components/StepsSection";
import CoursesSection from "@/app/components/CoursesSection";
import FutureSection from "@/app/components/FutureSection";
import Testimonials from "@/app/components/Testimonials";
import PricingSection from "@/app/components/PricingSection";
import CommunitySection from "@/app/components/CommunitySection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <StepsSection />
      <CoursesSection />
      <FutureSection />
      <PricingSection />
      <Testimonials />
      <CommunitySection />
    </main>
  );
}
