const SITE_URL = "https://backroomscript.com";

export const metadata = {
  title: "Dashboard - Your Courses",
  description: "Access your BackroomScript dashboard to view your courses, manage your plan, track progress, and prepare for certification and jobs.",

  robots: {
    index: false,
    follow: false,
  },

  alternates: {
    canonical: `${SITE_URL}/dashboard`,
  },
};

export default function DashboardLayout({ children }) {
  return <>{children}</>;
}
