import { SITE, absoluteUrl } from "@/app/constants/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
