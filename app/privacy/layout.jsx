import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the BackroomScript privacy policy: how we collect, use and protect your personal information, payments and cookies, and your data rights.",
  path: "/privacy",
});

export default function PrivacyLayout({ children }) {
  return children;
}
