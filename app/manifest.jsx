import { SITE } from "@/app/constants/site";

export default function manifest() {
  return {
    name: `${SITE.name} - ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fffaf7",
    theme_color: "#f26a3d",
    categories: ["education", "business"],
    lang: "en",
    dir: "ltr",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-384.png", sizes: "384x384", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Plans", url: "/tiers", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Success Stories", url: "/success-stories", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
