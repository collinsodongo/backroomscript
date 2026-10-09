import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Verify Your Email",
  description: "Verify your BackroomScript account email address.",
  path: "/authentication/verification",
  index: false,
});

export default function VerificationLayout({ children }) {
  return children;
}
