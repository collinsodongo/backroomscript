import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Plans & Pricing",
  description:
    "Compare BackroomScript plans. Start free with Foundation, or upgrade to Certificate or Career for full courses, certification and job access.",
  path: "/tiers",
});

const schema = breadcrumbSchema([{ name: "Plans & Pricing", path: "/tiers" }]);

export default function TiersLayout({ children }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
