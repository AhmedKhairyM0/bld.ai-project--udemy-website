import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

import styles from "./courseCard.module.css";

function CourseCard({ course }) {
  return (
    <Link
      to='course/1'
      state={course}
    >
      <div className={styles.courseCard}>
        {/* <a href={course.link}> */}
        <img src={course.image} alt={course.title} />
        <div className={styles.courseTitle}>
          <h3>{course.title}</h3>
        </div>
        <div className={styles.courseInstructor}>{course.instructor}</div>
        <CourseRating stars={course.stars} views={course.views} />
        <div>
          <span className={styles.coursePrice}>{course.price}</span>
          <span className={styles.courseOldPrice}>{course.old_price}</span>
        </div>
        {course.bestSeller ? (
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
