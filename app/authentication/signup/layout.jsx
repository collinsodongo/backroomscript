import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Sign Up",
  description:
    "Create your free BackroomScript account, start learning and work towards your certification and job access.",
  path: "/authentication/signup",
});

export default function SignupLayout({ children }) {
  return children;
}
