"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SuccessWoman from "@/public/assets/successWoman.png";
import styles from "@/app/style/homeSection.module.css";
import { usePublicStatsStore } from "@/app/store/PublicStatsStore";
import {
  IoSparkles as SparklesIcon,
  IoHeart as HeartIcon,
  IoChevronForward as ChevronIcon,
} from "react-icons/io5";

export default function HomeSection() {
  const stats = usePublicStatsStore((state) => state.stats);
  const isLoading = usePublicStatsStore((state) => state.loading);
  const fetchStats = usePublicStatsStore((state) => state.fetchStats);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <div className={styles.homeSection}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <HeartIcon className={styles.badgeIcon} />
              <span>Join 2,251+ Students Building Their Careers</span>
            </div>

            <h1 className={styles.heroTitle}>
              Learn. Get Certified.
              <br />
              <span className={styles.heroTitleGradient}>
                Get Hired Through Us
              </span>
            </h1>

            <p className={styles.heroDescription}>
              Learn with our school, pass the certification, and access
              <span> jobs through your profile</span> with our wider range of
              companies that hire through us.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/tiers" className={styles.ctaPrimary}>
                <span>Start Your Journey</span>
                <SparklesIcon className={styles.ctaIcon} />
              </Link>
              <Link href="/about" className={styles.ctaSecondary}>
                <span>See How It Works</span>
                <ChevronIcon className={styles.ctaIcon} />
              </Link>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h1>200+</h1>
                <p>Students</p>
              </div>
              <div className={styles.statCard}>
                <h1>300%</h1>
                <p>Skills Growth</p>
              </div>
              <div className={styles.statCard}>
                <h1>1000+</h1>
                <p>Lessons</p>
              </div>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <Image
                src={SuccessWoman}
                alt="Successful graduate"
                className={styles.mainImage}
                priority
              />

              <div className={styles.floatingCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTitle}>New Students</span>
                  <span className={styles.cardBadge}>
                    {isLoading ? "..." : `${stats.weeklyGrowth > 0 ? "+" : ""}${stats.weeklyGrowth}%`} {stats.weeklyGrowth >= 0 ? "↑" : "↓"}
                  </span>
                </div>
                <div className={styles.cardSubtitle}>Today</div>
                <div className={styles.cardValue}>
                  {isLoading ? "..." : `${stats.weeklyUsers.toLocaleString()}`}
                </div>
                <div className={styles.cardChart}>
                  <svg width="100%" height="30" viewBox="0 0 100 30">
                    <path
                      d="M 0 15 Q 25 5, 50 15 T 100 10"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.mentorsBadge}>
                <div className={styles.mentorsAvatars}>
                  <div className={styles.avatar}>👩🏾</div>
                  <div className={styles.avatar}>👩🏽</div>
                  <div className={styles.avatar}>👩🏻</div>
                  <div className={styles.avatar}>👸🏿</div>
                </div>
                <span className={styles.mentorsText}>
                  100+ Top Instructors
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}