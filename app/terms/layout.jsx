import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Read the BackroomScript terms of use: your rights and responsibilities when using our courses, plans, certification and mentorship services.",
  path: "/terms",
});

export default function TermsLayout({ children }) {
  return children;
}
