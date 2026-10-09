"use client";

import { useState } from "react";
import styles from "@/app/style/coachingSection.module.css";
import {
  IoSend,
  IoChatbubbles,
  IoCalendar,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { FaCrown, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { useCommunityStore } from "@/app/store/CommunityStore";

export default function CoachingSection({ currentTier, currentTierInfo }) {
  const [replyText, setReplyText] = useState("");
  const community = useCommunityStore((state) => state.community);
  const openCommunity = useCommunityStore((state) => state.openCommunity);

  const handleReplySubmit = () => {
    if (!replyText.trim()) return;
    toast.success("Reply sent! Our team will respond within 24 hours.");
    setReplyText("");
  };

  return (
    <div className={styles.coachingSection}>
      <div className={styles.coachingCard}>
        <div className={styles.coachingIcon}>
          <FaWhatsapp />
        </div>
        <h2>{community.title}</h2>
        <p>{community.description}</p>
        <button className={styles.coachingBookButton} onClick={openCommunity}>
          <FaWhatsapp />
          <span>{community.button}</span>
        </button>
      </div>

      <div className={styles.coachingCard}>
        <div className={styles.coachingIcon}>
          <IoChatbubbles />
        </div>
        <h2>Ask Our Instructors</h2>
        <p>
          Have questions about your course? Need guidance on your
          certification? Our team is here to help!
        </p>
        <textarea
          className={styles.coachingTextarea}
          placeholder="Type your question here..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          rows={5}
        />
        <button className={styles.coachingSendButton} onClick={handleReplySubmit}>
          <IoSend />
          <span>Send Message</span>
        </button>
      </div>

      {currentTier === "elite" && (
        <div className={styles.coachingCard}>
          <div className={styles.coachingIcon}>
            <FaCrown />
          </div>
          <h2>1-on-1 Mentorship Session</h2>
          <p>
            As a Queen Elite student, you have access to a 60-minute mentorship
            session to prepare for your certification and job placement!
          </p>
          <button className={styles.coachingBookButton}>
            <IoCalendar />
            <span>Book Your Session</span>
          </button>
        </div>
      )}

      <div className={styles.responseTimes}>
        <div className={styles.responseTimeItem}>
          <IoCheckmarkCircle />
          <div>
            <strong>Response Time</strong>
            <p>{currentTierInfo.limits.responseTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
