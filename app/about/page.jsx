"use client";

import { useEffect } from "react";
import styles from "@/app/style/info.module.css";

export default function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.infoHeader}>
        <h1>About BackroomScript</h1>
      </div>
      <div className={styles.section}>
        <h2>
          BackroomScript is a school that trains you, certifies you and connects you to jobs.
        </h2>
        <p>
          We provide structured lessons and practical material that prepare you for certification. Once you learn and pass the certification, you can access jobs through your profile with our wider range of companies that hire through us. Our online platform works across all devices, so you can study wherever you are.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Why Choose BackroomScript?</h2>
        <p>
          We are committed to giving our students a clear path from learning to employment. Our material is tested, our instructors support you throughout, and our WhatsApp community keeps you connected with other students. Certified students get access to job opportunities from the companies that hire through us.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Why Learn With Us</h2>
        <p>
          Learning is only useful when it leads somewhere. That is why every course at BackroomScript ends in a certification, and every certification opens the door to jobs from our hiring partners. You are not studying alone, you are building towards a real opportunity.
        </p>
      </div>
       
      <div className={styles.section}>
        <h2>
          What You Get As A Student
        </h2>
        <p>
          Every plan is designed to take you from beginner to certified and job ready. Here is what you can expect:
        </p>

        <ul className={styles.bulletList}>
          <li>
            Structured Learning: Clear lessons that take you step by step towards certification.
          </li>
          <li>
            Certification: Pass the certification to show hiring companies you are ready.
          </li>
          <li>
            Job Access: Certified students access jobs through their profile from companies that hire through us.
          </li>
          <li>
            Community: Join our WhatsApp community to learn alongside other students.
          </li>
          <li>
            Instructor Support: Get answers to your questions and guidance on your certification.
          </li>
        </ul>
        <p>
          Every lesson in our library is chosen to help you pass the certification and get hired.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Getting Started with BackroomScript</h2>
        <p>
          When choosing your plan at BackroomScript, consider your career goals, learning style, and budget. We recommend starting with our free Starter Glow plan if you are new, then upgrading to Radiant Pro or Queen Elite as you move towards certification. Our plan descriptions and success stories will help you make an informed decision.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Our Course Categories</h2>
        <p>
          Explore our range of courses across these categories:
        </p>
        <ul className={styles.bulletList}>
          <li>Communication Skills</li>
          <li>Business Communication</li>
          <li>Social Skills</li>
          <li>Content Creation</li>
          <li>Professional Networking</li>
        </ul>
      </div>
      <div className={styles.section}>
        <p>
          BackroomScript is your trusted partner from learning to employment. Learn, pass the certification, and access jobs through your profile with the companies that hire through us.
        </p>
      </div>
    </div>
  );
}
