import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Log In",
  description: "Log in to your BackroomScript account to continue your courses.",
  path: "/authentication/login",
  index: false,
});

export default function LoginLayout({ children }) {
  return children;
}
