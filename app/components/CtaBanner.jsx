"use client";

import Link from "next/link";
import styles from "@/app/style/ctaBanner.module.css";

export default function CtaBanner({ title, description, href, label }) {
  return (
    <div className={styles.ctaBanner}>
      <div className={styles.ctaText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link href={href} className={styles.ctaLink}>
        {label}
      </Link>
    </div>
  );
}
