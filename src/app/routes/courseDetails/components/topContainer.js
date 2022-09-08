import React, { useContext } from "react";
import globalStyles from "../courseDetails.module.css";
import styles from "./topContainer.module.css";
import { CourseRating } from "../../home/components/courseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGlobe, faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { CourseContext } from "../../../contexts/coursesContext";
import moment from 'moment';

function TopContainer() {
  const course = useContext(CourseContext);

  return (
    <section className={`${globalStyles.darkContainer} ${globalStyles.paddingContainer}`}>
      <div className={globalStyles.centerContainer}>
        {/* course image */}
        <div className={styles.category}>{course.category}</div>
        <h1 className={styles.titleCourse}>{course.title}</h1>
        <div className={styles.subtitleCourse}>{course.subtitle}</div>
        <div className={styles.reviewsNum}>
          <a href="#reviews">
            <CourseRating stars={Number(course.rate_stars.toFixed(1))} />
            <span className={styles.voters}>({course.rate_num} ratings)</span>
          </a>
          <span>{course.students_num} students</span>
        </div>
        <div className={styles.instructor}>
          Created by{" "}
          {course.instructors.map((instructor, index) => <a href={`#instructor-${index+1}`} key={`instructor-${index+1}`}>{instructor.name}, </a>)}
        </div>
        <div className={globalStyles.flexContainer}>
          <IconLabeledComponent
            faIcon={faClock}
            label={`Last updated ${moment(course.update_date).format('YYYY-MM')}`}
          />
          <IconLabeledComponent faIcon={faGlobe} label={course.content_lang} />
          <IconLabeledComponent faIcon={faClosedCaptioning} label={course.caption_lang} />
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
