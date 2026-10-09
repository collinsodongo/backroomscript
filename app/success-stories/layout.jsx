import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Read stories from BackroomScript students who learned, passed their certification and found jobs through the companies that hire through us.",
  path: "/success-stories",
});

const schema = breadcrumbSchema([{ name: "Success Stories", path: "/success-stories" }]);

export default function SuccessStoriesLayout({ children }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
