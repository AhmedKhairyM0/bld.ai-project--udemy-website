import CourseCard from "./courseCard";
import styles from "./coursesCards.module.css";

function CoursesCards({ courses }) {
  const coursesArr = courses.map((course) => (
    <CourseCard course={course} key={course.id} />
  ));
  return <div className={styles.coursesCardsGrid}>{coursesArr}</div>;
}

export default CoursesCards;
