import React, { useContext } from "react";
import styles from "./topContainer.module.css";
import { CourseRating } from "../../home/components/courseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { CourseContext } from "../../../contexts/coursesContext";

function TopContainer() {
  const course = useContext(CourseContext);

  return (
    <section className={`${styles.darkContainer} ${styles.paddingContainer}`}>
      <div className={styles.centerContainer}>
        {/* course image */}
        <div className={styles.category}>{course.category}</div>
        <h1 className={styles.titleCourse}>{course.title}</h1>
        <div className={styles.subtitleCourse}>{course.subtitle}</div>
        <div className={styles.reviewsNum}>
          <a href="#reviews">
            <CourseRating stars={course.rate_stars.toFixed(1)} />
            <span className={styles.voters}>({course.rate_num} ratings)</span>
          </a>
          <span>{course.students_num} students</span>
        </div>
        <div className={styles.instructor}>
          Created by{" "}
          {course.instructors.map((instructor, index) => <a href={`#instructor-${index+1}`}>{instructor.name}, </a>)}
        </div>
        <div className={styles.flexContainer}>
          <IconLabeledComponent
            faIcon={faGlobe}
            label={`Last updated ${course.update_date}`}
          />
          <IconLabeledComponent faIcon={faGlobe} label={course.content_lang} />
          <IconLabeledComponent faIcon={faGlobe} label={course.caption_lang} />
        </div>
        {/*  */}
      </div>
    </section>
  );
}

function IconLabeledComponent({ faIcon, label }) {
  return (
    <div className={styles.iconLabel}>
      <FontAwesomeIcon icon={faIcon} />
      <span> {label}</span>
    </div>
  );
}

export default TopContainer;
