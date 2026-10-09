"use client";

import { useState, useEffect } from "react";
import { useSuccessStoryStore } from "@/app/store/SuccessStoryStore";
import PageSection from "@/app/components/PageSection";
import SectionHeading from "@/app/components/SectionHeading";
import { TIER_NAMES } from "@/app/constants/courses";
import { FAQ_DATA } from "@/app/constants/faq";
import styles from "@/app/style/testimonials.module.css";
import {
  MdOutlineKeyboardArrowLeft as LeftIcon,
  MdOutlineKeyboardArrowRight as RightIcon,
  MdAdd as PlusIcon,
  MdRemove as MinusIcon,
} from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";

const initials = (name) =>
  name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const { approvedStories, storiesLoading, getApprovedStories } = useSuccessStoryStore();
  const [current, setCurrent] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    getApprovedStories(20);
  }, [getApprovedStories]);

  const stories = approvedStories || [];
  const story = stories[current];
  const name = story?.user?.username || "Student";

  const move = (step) =>
    setCurrent((index) => (index + step + stories.length) % stories.length);

  return (
    <>
      <PageSection tone="soft">
        <div className={styles.voice}>
          <div className={styles.voiceText}>
            <SectionHeading before="Our students" accent="Voice" align="left" />

            {storiesLoading ? (
              <p className={styles.quote}>Loading stories...</p>
            ) : story ? (
              <>
                <p className={styles.quote}>{story.story}</p>
                <strong className={styles.author}>{name}</strong>
                <span className={styles.role}>
                  {TIER_NAMES[story.userTier] || "Student"} student
                </span>
              </>
            ) : (
              <p className={styles.quote}>
                No stories yet. Be the first to share how your certification
                changed your career!
              </p>
            )}
          </div>

          <div className={styles.voiceCards}>
            {stories.length > 1 && (
              <div className={styles.controls}>
                <button type="button" aria-label="Previous story" onClick={() => move(-1)}>
                  <LeftIcon />
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  className={styles.next}
                  onClick={() => move(1)}
                >
                  <RightIcon />
                </button>
              </div>
            )}

            {story && (
              <div className={styles.profileCard}>
                <span className={styles.avatar}>{initials(name)}</span>
                <p>{story.title}</p>
                <strong>{name}</strong>
              </div>
            )}

            {stories.length > 0 && (
              <div className={styles.countCard}>
                <IoChatbubbles />
                <strong>{stories.length}</strong>
                <span>success stories shared by students</span>
              </div>
            )}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          before="Frequently asked"
          accent="questions"
          subtitle="Everything you need to know before you start learning"
        />

        <div className={styles.faqList}>
          {FAQ_DATA.map(({ question, answer }, index) => (
            <div key={question} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqQuestion}
                aria-expanded={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{question}</span>
                {openFAQ === index ? <MinusIcon /> : <PlusIcon />}
              </button>
              {openFAQ === index && <p className={styles.faqAnswer}>{answer}</p>}
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
