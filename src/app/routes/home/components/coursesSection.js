import CourseCard from "./courseCard";
import styles from "./coursesSection.module.css";

function CoursesSection({ courses }) {
  const coursesArr = courses.map((course) => (
    <CourseCard course={course} key={course.id} />
  ));
  return <div className={styles.coursesCardsGrid}>{coursesArr}</div>;
}

export default CoursesSection;
