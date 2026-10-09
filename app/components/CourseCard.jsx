import Link from "next/link";
import styles from "@/app/style/courseCard.module.css";
import { IoRibbon, IoBriefcase } from "react-icons/io5";

export default function CourseCard({ icon: Icon, title, description, href, tone = "green" }) {
  return (
    <article className={styles.courseCard}>
      <div className={`${styles.courseBanner} ${styles[tone]}`}>
        <Icon />
      </div>
      <div className={styles.courseBody}>
        <div className={styles.courseTitleRow}>
          <h3>{title}</h3>
          <Link href={href}>Enroll</Link>
        </div>
        <p>{description}</p>
        <div className={styles.courseMeta}>
          <span>
            <IoRibbon /> Certificate
          </span>
          <span>
            <IoBriefcase /> Job access
          </span>
        </div>
      </div>
    </article>
  );
}
