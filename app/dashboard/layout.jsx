import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Your BackroomScript courses, plan and progress.",
  path: "/dashboard",
  index: false,
});

export default function DashboardLayout({ children }) {
  return children;
}
