import React from "react";
import { Link } from "react-router-dom";
import CourseRating from "../../courseDetails/components/courseRating";

import styles from "./courseCard.module.css";

function CourseCard({ course }) {
  return (
    <Link
      to={`course/${course.title.toLowerCase().replaceAll(/[ :]/g, "-")}`}
      state={course}
      className={styles.courseLink}
    >
      <div className={styles.courseCard}>
        <img src={course.image} alt={course.title} />
        <div className={styles.courseTitle}>
          <h3>{course.title}</h3>
        </div>
        <div className={styles.courseInstructor}>
          {course.instructors.map((inst) => inst.name.split(" ")[0]).join(", ")}
        </div>
        <CourseRating stars={course.rate_stars} views={course.students_num} />
        <div>
          <span className={styles.coursePrice}>{course.price}</span>
          <span className={styles.courseOldPrice}>{course.old_price}</span>
        </div>
        {course.best_seller ? (
          <div className={styles.courseBestseller}>Bestseller</div>
        ) : null}
      </div>
    </Link>
  );
}

export default CourseCard;
