import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/app/lib/seo";
import { SITE, absoluteUrl } from "@/app/constants/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact BackroomScript about courses, plans, certification or job access. Call (+44) 7401-012-610 or email us, Monday to Friday, 8AM to 6PM GMT.",
  path: "/contact",
});

const schema = [
  breadcrumbSchema([{ name: "Contact Us", path: "/contact" }]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@id": absoluteUrl("/#organization"),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SITE.telephone,
        email: SITE.email,
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    },
  },
];

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
