const SITE_URL = "http://backroomscript.com";

export const metadata = {
  title: "Sign Up - Join 2,251+ Students Learning and Getting Hired",
  description: "Create your free BackroomScript account and start learning today. Join 2,251+ students working towards certification and jobs.",

  openGraph: {
    title: "Sign Up - Join BackroomScript Today",
    description: "Create your free account, learn, get certified and access jobs.",
    url: `${SITE_URL}/authentication/signup`,
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sign Up - Join BackroomScript Today",
    description: "Create your free account and start learning.",
  },

  alternates: {
    canonical: `${SITE_URL}/authentication/signup`,
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function SignupLayout({ children }) {
  return <>{children}</>;
}
