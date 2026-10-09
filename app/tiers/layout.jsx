const SITE_URL = "https://backroomscript.com";
const BANNER_URL = "https://raw.githubusercontent.com/DarknessMonarch/backroomscript/refs/heads/master/public/assets/banner.png";

export const metadata = {
  title: "Plans - Choose Your Learning Plan",
  description: "Invest in your career. Choose from Starter Glow (Free), Radiant Pro (KSh 3,499), or Queen Elite (KSh 9,999). Learn, get certified and access jobs through the companies that hire through us.",

  keywords: [
    "BackroomScript pricing",
    "course pricing",
    "certification packages",
    "school plans",
    "job access plans",
    "student plans",
    "business course pricing",
    "career investment",
    "course cost",
    "learning plans"
  ],

  openGraph: {
    title: "Plans - Choose Your Learning Plan | BackroomScript",
    description: "Invest in your career. From free starter lessons to elite 1-on-1 mentorship and priority job access. Find your plan.",
    url: `${SITE_URL}/tiers`,
    type: "website",
    images: [
      {
        url: BANNER_URL,
        width: 1200,
        height: 630,
        alt: "BackroomScript Pricing Tiers - Starter Glow, Radiant Pro, Queen Elite"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plans - Choose Your Learning Plan | BackroomScript",
    description: "Invest in your career. From free starter lessons to elite mentorship and priority job access.",
    images: [BANNER_URL],
  },

  alternates: {
    canonical: `${SITE_URL}/tiers`,
  },
};

// JSON-LD for BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing Tiers",
      "item": `${SITE_URL}/tiers`
    }
  ]
};

// JSON-LD for Pricing/Tier structure
const tiersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Offer",
      "position": 1,
      "name": "Starter Glow",
      "description": "Start learning for free and begin your path to certification",
      "price": "0",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Product",
        "name": "Starter Glow Tier",
        "description": "Access to 1 lesson per day and email support"
      }
    },
    {
      "@type": "Offer",
      "position": 2,
      "name": "Radiant Pro",
      "description": "Unlock the full course and get on the path to job placement",
      "price": "999",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Product",
        "name": "Radiant Pro Tier",
        "description": "WhatsApp community access, 20+ premium lessons, bookmark your favorites, access previous lessons, everything in Starter Glow, priority support (12h response) and certification preparation with job access through your profile",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1842"
        }
      }
    },
    {
      "@type": "Offer",
      "position": 3,
      "name": "Queen Elite",
      "description": "Complete training with mentorship and priority job access",
      "price": "3499",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "itemOffered": {
        "@type": "Product",
        "name": "Queen Elite Tier",
        "description": "You get unlimited expert lessons, all categories unlocked, monthly content updates, direct WhatsApp support, lifetime content updates, everything included in Radiant Pro, a 1-on-1 mentorship session (60 minutes), and priority access to jobs from companies that hire through us",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "409"
        }
      }
    }
  ]
};

export default function TiersLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tiersSchema) }}
      />
      {children}
    </>
  );
}
