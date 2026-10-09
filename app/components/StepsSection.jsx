import PageSection from "@/app/components/PageSection";
import SectionHeading from "@/app/components/SectionHeading";
import styles from "@/app/style/stepsSection.module.css";
import { IoSearch, IoSchool, IoRibbon } from "react-icons/io5";

const STEPS = [
  {
    icon: IoSearch,
    tone: "green",
    title: "Find Your Course",
    description: "Pick the course that matches your goals and enrol for free.",
  },
  {
    icon: IoSchool,
    tone: "blue",
    title: "Learn & Pass",
    description: "Study the lessons, join the community and pass your certification.",
  },
  {
    icon: IoRibbon,
    tone: "orange",
    title: "Get Hired",
    description: "Access jobs through your profile from the companies that hire through us.",
  },
];

export default function StepsSection() {
  return (
    <PageSection>
      <SectionHeading before="The way you join" accent="our school" align="left" />

      <div className={styles.steps}>
        {STEPS.map(({ icon: Icon, tone, title, description }) => (
          <div key={title} className={styles.step}>
            <span className={`${styles.stepIcon} ${styles[tone]}`}>
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
