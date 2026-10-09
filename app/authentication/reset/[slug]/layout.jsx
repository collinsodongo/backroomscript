import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Set New Password",
  description: "Set a new password for your BackroomScript account.",
  index: false,
});

export default function ResetPasswordLayout({ children }) {
  return children;
}
