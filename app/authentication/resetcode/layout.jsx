import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Reset Password",
  description: "Request a link to reset your BackroomScript password.",
  path: "/authentication/resetcode",
  index: false,
});

export default function ResetCodeLayout({ children }) {
  return children;
}
