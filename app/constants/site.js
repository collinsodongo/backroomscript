export const SITE = {
  name: "BackroomScript",
  url: "https://backroomscript.com",
  tagline: "Learn, Get Certified & Get Hired",
  description:
    "BackroomScript is an online school. Learn practical skills, pass the certification and access jobs through your profile with the companies that hire through us.",
  logo: "/assets/logo.png",
  banner: "/assets/banner.png",
  locale: "en_GB",
  email: "backroomscript@gmail.com",
  telephone: "+447401012610",
  country: "GB",
  social: [
    "https://www.instagram.com/backroomscript",
    "https://www.tiktok.com/@backroomscript",
  ],
};

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
