const SITE_URL = "http://backroomscript.com";

export const metadata = {
  title: "Login - Access Your BackroomScript Account",
  description: "Login to your BackroomScript account to access your courses, certification progress, and plan benefits. Secure authentication for 2,251+ students.",

  openGraph: {
    title: "Login | BackroomScript",
    description: "Login to access your courses and plan benefits.",
    url: `${SITE_URL}/authentication/login`,
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Login | BackroomScript",
    description: "Login to access your courses and plan benefits.",
  },

  alternates: {
    canonical: `${SITE_URL}/authentication/login`,
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({ children }) {
  return <>{children}</>;
}
