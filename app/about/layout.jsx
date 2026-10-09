import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/app/lib/seo";
import { SITE, absoluteUrl } from "@/app/constants/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "BackroomScript is an online school that trains you, certifies you and connects you to jobs with the companies that hire through us.",
  path: "/about",
});

const schema = [
  breadcrumbSchema([{ name: "About Us", path: "/about" }]),
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: absoluteUrl("/about"),
    about: { "@id": absoluteUrl("/#organization") },
  },
];

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
