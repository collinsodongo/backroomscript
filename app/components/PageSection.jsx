import styles from "@/app/style/pageSection.module.css";

export default function PageSection({ tone = "plain", children }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
