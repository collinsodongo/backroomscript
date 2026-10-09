"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SuccessWoman from "@/public/assets/successWoman.png";
import styles from "@/app/style/homeSection.module.css";
import { usePublicStatsStore } from "@/app/store/PublicStatsStore";
import { useCommunityStore } from "@/app/store/CommunityStore";
import { FaWhatsapp } from "react-icons/fa";
import { IoCheckmark, IoPerson, IoTrendingUp } from "react-icons/io5";

export default function HomeSection() {
  const stats = usePublicStatsStore((state) => state.stats);
  const fetchStats = usePublicStatsStore((state) => state.fetchStats);
  const openCommunity = useCommunityStore((state) => state.openCommunity);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <section className={styles.hero}>
      <svg
        className={styles.curves}
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-20 420 C 200 260, 380 520, 620 340 S 980 180, 1220 300" />
        <path d="M-20 470 C 220 320, 400 560, 640 390 S 1000 230, 1220 350" />
        <path d="M-20 140 C 180 60, 360 220, 560 120" />
      </svg>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Learn what you want from{" "}
            <span className={styles.accent}>BackroomScript</span> and get hired!
          </h1>

          <p className={styles.heroDescription}>
            The more you learn, the more doors open. Pass the certification
            and access jobs through your profile.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/authentication/signup" className={styles.enrollButton}>
              Enroll Now
            </Link>
            <button
              type="button"
              className={styles.communityButton}
              onClick={openCommunity}
            >
              <span className={styles.communityIcon}>
                <FaWhatsapp />
              </span>
              <span className={styles.communityText}>Join our community</span>
            </button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <span className={styles.blockGreen} />
          <span className={styles.blockOrange} />
          <Image
            src={SuccessWoman}
            alt="Student who passed her certification"
            className={styles.heroImage}
            priority
          />

          {stats.totalUsers > 0 && (
            <div className={`${styles.floatingCard} ${styles.studentsCard}`}>
              <strong>{stats.totalUsers.toLocaleString()}</strong>
              <span>Students learning</span>
              <div className={styles.avatars}>
                {[1, 2, 3, 4].map((id) => (
                  <i key={id}>
                    <IoPerson />
                  </i>
                ))}
                <b>
                  <IoTrendingUp />
                </b>
              </div>
            </div>
          )}

          <div className={`${styles.floatingCard} ${styles.admissionCard}`}>
            <i className={styles.admissionAvatar}>
              <IoPerson />
            </i>
            <span>
              Congratulations
              <br />
              certification passed!
            </span>
            <b className={styles.admissionCheck}>
              <IoCheckmark />
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
