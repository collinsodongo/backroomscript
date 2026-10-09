const SITE_URL = "http://backroomscript.com";
const BANNER_URL = "https://raw.githubusercontent.com/DarknessMonarch/backroomscript/refs/heads/master/public/assets/banner.png";

export const metadata = {
  title: "About Us - Learn, Get Certified & Get Hired",
  description: "Learn about BackroomScript, a school that trains and certifies you, then connects you to jobs with the companies that hire through us. Join 2,251+ students.",

  keywords: [
    "about BackroomScript",
    "online school",
    "certification courses",
    "job placement",
    "career training",
    "hiring partners",
    "student community",
    "skills training",
    "learn and get hired",
    "BackroomScript team"
  ],

  openGraph: {
    title: "About BackroomScript - Learn, Get Certified & Get Hired",
    description: "Our mission: Help students learn, pass the certification and access jobs through the companies that hire through us.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: BANNER_URL,
        width: 1200,
        height: 630,
        alt: "About BackroomScript - Online School With Job Access"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About BackroomScript - Learn, Get Certified & Get Hired",
    description: "Learn, get certified and get hired. Join 2,251+ students.",
    images: [BANNER_URL],
  },

  alternates: {
    canonical: `${SITE_URL}/about`,
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
      "name": "About Us",
      "item": `${SITE_URL}/about`
    }
  ]
};

// JSON-LD for AboutPage
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About BackroomScript",
  "description": "BackroomScript is a school that trains you, certifies you and connects you to jobs",
  "url": `${SITE_URL}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": "BackroomScript",
    "url": SITE_URL,
    "logo": `${SITE_URL}/assets/logo.png`,
    "description": "An online school that trains and certifies students, then connects them to jobs with the companies that hire through us",
    "foundingDate": "2023",
    "founder": {
      "@type": "Organization",
      "name": "BackroomScript Team"
    },
    "areaServed": "Worldwide",
    "slogan": "Learn. Get certified. Get hired."
  }
};

// JSON-LD for FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is BackroomScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BackroomScript is a school that trains you, certifies you and connects you to jobs. Once you learn and pass the certification, you can access jobs through your profile with our wider range of hiring companies."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose BackroomScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We give students a clear path from learning to employment, with tested course material, instructor support and a WhatsApp community. Certified students access jobs from the companies that hire through us."
      }
    },
    {
      "@type": "Question",
      "name": "What courses are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer courses across Communication Skills, Business Communication, Social Skills, Content Creation and Professional Networking."
      }
    }
  ]
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
