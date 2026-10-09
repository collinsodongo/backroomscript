import { create } from "zustand";

export const useCommunityStore = create((_, get) => ({
  links: {
    whatsapp: "https://chat.whatsapp.com/IjbFJKngpb9CABC9eV1mxp",
    instagram: "https://www.instagram.com/backroomscript",
    tiktok: "https://www.tiktok.com/@backroomscript",
  },

  community: {
    title: "Join Our WhatsApp Community",
    description:
      "Learn with fellow students, pass your certification, and get access to jobs through your profile with our wider range of hiring companies.",
    button: "Join WhatsApp Community",
    promise:
      "Learn, pass the certification, and unlock jobs from the companies that hire through us.",
  },

  openLink: (name) => {
    const url = get().links[name];
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  },

  openCommunity: () => get().openLink("whatsapp"),
}));
