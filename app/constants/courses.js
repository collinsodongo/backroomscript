import {
  IoChatbubbles,
  IoBriefcase,
  IoPeople,
  IoVideocam,
  IoGitNetwork,
} from "react-icons/io5";

export const COURSES = [
  {
    id: "communication",
    icon: IoChatbubbles,
    title: "Communication Skills",
    description: "Speak and write with clarity in any conversation or interview.",
  },
  {
    id: "business",
    icon: IoBriefcase,
    title: "Business Communication",
    description: "Emails, pitches and negotiations that employers expect.",
  },
  {
    id: "social",
    icon: IoPeople,
    title: "Social Skills",
    description: "Build confidence, teamwork and professional presence.",
  },
  {
    id: "content",
    icon: IoVideocam,
    title: "Content Creation",
    description: "Create content that builds your brand and your career.",
  },
  {
    id: "networking",
    icon: IoGitNetwork,
    title: "Professional Networking",
    description: "Connect with hiring companies and grow your opportunities.",
  },
];

export const TIER_NAMES = {
  starter: "Foundation",
  pro: "Certificate",
  elite: "Career",
};
