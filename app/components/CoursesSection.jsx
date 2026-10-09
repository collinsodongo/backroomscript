import PageSection from "@/app/components/PageSection";
import SectionHeading from "@/app/components/SectionHeading";
import CourseCard from "@/app/components/CourseCard";
import { COURSES } from "@/app/constants/courses";
import styles from "@/app/style/coursesSection.module.css";

const TONES = ["green", "orange", "blue"];

export default function CoursesSection() {
  return (
    <PageSection tone="soft">
      <SectionHeading
        before="World-class"
        accent="courses are here"
        subtitle="Every course ends in a certification that opens the door to jobs"
      />

      <div className={styles.courses}>
        {COURSES.map((course, index) => (
          <div key={course.id} className={styles.courseItem}>
            <CourseCard
              {...course}
              tone={TONES[index % TONES.length]}
              href="/authentication/signup"
            />
          </div>
        ))}
      </div>
    </PageSection>
  );
}
