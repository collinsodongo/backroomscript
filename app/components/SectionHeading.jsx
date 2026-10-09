"use client";

import styles from "@/app/style/sectionHeading.module.css";

export default function SectionHeading({ before, accent, after, subtitle }) {
  return (
    <div className={styles.sectionHeading}>
      <h2>
        {before} <span>{accent}</span> {after}
      </h2>
      <i className={styles.underline} />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
