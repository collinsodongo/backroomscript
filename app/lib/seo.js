import { SITE, absoluteUrl } from "@/app/constants/site";

export function buildMetadata({ title, description, path = "/", index = true }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} - ${SITE.tagline}`;
  const image = {
    url: SITE.banner,
    width: 1200,
    height: 630,
    alt: `${SITE.name} - ${SITE.tagline}`,
  };

  return {
    ...(title && { title }),
    description,
    ...(index && { alternates: { canonical: path } }),
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...(!index && { robots: { index: false, follow: true } }),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      ({ name, path }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: absoluteUrl(path),
      })
    ),
  };
}

export const organizationReference = {
  "@type": "EducationalOrganization",
  name: SITE.name,
  url: SITE.url,
};
