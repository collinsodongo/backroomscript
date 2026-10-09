import Link from "next/link";
import PageSection from "@/app/components/PageSection";
import { COURSES } from "@/app/constants/courses";
import styles from "@/app/style/futureSection.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";

const BENEFITS = [
  "Practical lessons taught by instructors who work in the field",
  "A certification that proves your skills to hiring companies",
  "Jobs through your profile from the companies that hire through us",
  "A WhatsApp community of students learning with you",
];

export default function FutureSection() {
  return (
    <PageSection>
      <div className={styles.future}>
        <div className={styles.visual}>
          {COURSES.slice(0, 3).map(({ id, icon: Icon, title }) => (
            <div key={id} className={styles.visualCard}>
              <span className={styles.visualIcon}>
                <Icon />
              </span>
              <strong>{title}</strong>
              <IoCheckmarkCircle className={styles.visualCheck} />
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <h2>
            Find the course that shapes your{" "}
            <span>brighter future</span>
          </h2>
          <p>
            Learning is only useful when it leads somewhere. Every course ends
            in a certification, and every certification opens the door to jobs.
          </p>
          <ul>
            {BENEFITS.map((benefit) => (
              <li key={benefit}>
                <IoCheckmarkCircle />
                {benefit}
              </li>
            ))}
          </ul>
          <Link href="/authentication/signup" className={styles.startButton}>
            Get Started
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
