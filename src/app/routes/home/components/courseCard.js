import { NumbersOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

import styles from "./courseCard.module.css";

function CourseCard({ course }) {
  return (
    <Link
      to={`course/${course.title.toLowerCase().replaceAll(/[ :]/g,'-')}`}
      state={course}
      className={styles.courseLink}
    >
      <div className={styles.courseCard}>
        {/* <a href={course.link}> */}
        <img src={course.image} alt={course.title} />
        <div className={styles.courseTitle}>
          <h3>{course.title}</h3>
        </div>
        <div className={styles.courseInstructor}>{course.instructors.map((inst)=> inst.name.split(' ')[0]).join(', ')}</div>
        <CourseRating stars={Number(course.rate_stars.toFixed(1))} views={course.students_num} />
        <div>
          <span className={styles.coursePrice}>{course.price}</span>
          <span className={styles.courseOldPrice}>{course.old_price}</span>
        </div>
        {course.best_seller ? (
          <div className={styles.courseBestseller}>Bestseller</div>
        ) : null}
        {/* </a> */}
      </div>
    </Link>
  );
}

export function CourseRating({ stars, views }) {
  const starsNum =
    stars - Math.trunc(stars) > 0 ? Math.trunc(stars) + 0.5 : stars;
  return (
    <div className={styles.courseRating}>
      <span className={styles.courseRatingNum}>{stars}</span>
      <ReactStars
        className={styles.starsRating}
        count={5}
        value={starsNum}
        size={18}
        color1={"gray"}
        color2={"#ffd700"}
        edit={false}
      />
      <span className={styles.courseViews}>{views}</span>
    </div>
  );
}

export default CourseCard;
