import styles from "@/app/style/sectionHeading.module.css";

export default function SectionHeading({
  before,
  accent,
  after,
  subtitle,
  align = "center",
  level = "h2",
}) {
  const Heading = level;

  return (
    <div className={`${styles.sectionHeading} ${styles[align]}`}>
      <div className={styles.titleRow}>
        <Heading>
          {before} <span>{accent}</span>
          {after && ` ${after}`}
        </Heading>
        <i className={styles.underline} />
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
