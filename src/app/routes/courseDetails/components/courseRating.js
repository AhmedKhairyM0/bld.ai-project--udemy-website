import React from "react";
import ReactStars from "react-stars";
import styles from "./courseRating.module.css";

function CourseRating({ stars, views }) {
  const starsNum =
    stars - Math.trunc(stars) > 0 ? Math.trunc(stars) + 0.5 : stars;
  return (
    <div className={`${styles.courseRating}`}>
      <span className={styles.courseRatingNum}>{Number(stars.toFixed(1))}</span>
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

export default CourseRating;
