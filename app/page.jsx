import HomeSection from "@/app/components/HomeSection";
import StepsSection from "@/app/components/StepsSection";
import CoursesSection from "@/app/components/CoursesSection";
import FutureSection from "@/app/components/FutureSection";
import Testimonials from "@/app/components/Testimonials";
import PricingSection from "@/app/components/PricingSection";
import CommunitySection from "@/app/components/CommunitySection";
import JsonLd from "@/app/components/JsonLd";
import { COURSES } from "@/app/constants/courses";
import { FAQ_DATA } from "@/app/constants/faq";
import { SITE } from "@/app/constants/site";
import { buildMetadata, organizationReference } from "@/app/lib/seo";

export const metadata = buildMetadata({ description: SITE.description, path: "/" });

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} courses`,
    itemListElement: COURSES.map(({ title, description }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: title,
        description,
        provider: organizationReference,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={homeSchema} />
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
