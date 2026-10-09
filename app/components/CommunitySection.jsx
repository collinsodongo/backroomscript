"use client";

import PageSection from "@/app/components/PageSection";
import { useCommunityStore } from "@/app/store/CommunityStore";
import styles from "@/app/style/communitySection.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoPeople, IoSchool, IoBriefcase } from "react-icons/io5";

const ICONS = [IoSchool, IoPeople, IoBriefcase];

export default function CommunitySection() {
  const community = useCommunityStore((state) => state.community);
  const openCommunity = useCommunityStore((state) => state.openCommunity);

  return (
    <PageSection tone="soft">
      <div className={styles.community}>
        <div className={styles.text}>
          <h2>
            Join <span>our</span> community?
          </h2>
          <p>{community.promise}</p>
        </div>

        <div className={styles.illustration} aria-hidden="true">
          {ICONS.map((Icon, index) => (
            <span key={index}>
              <Icon />
            </span>
          ))}
        </div>

        <button type="button" className={styles.joinButton} onClick={openCommunity}>
          <FaWhatsapp />
          Join now
        </button>
      </div>
    </PageSection>
  );
}
