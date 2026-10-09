import styles from "@/app/style/sectionHeading.module.css";

export default function SectionHeading({
  before,
  accent,
  after,
  subtitle,
  align = "center",
}) {
  return (
    <div className={`${styles.sectionHeading} ${styles[align]}`}>
      <div className={styles.titleRow}>
        <h2>
          {before} <span>{accent}</span>
          {after && ` ${after}`}
        </h2>
        <i className={styles.underline} />
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
