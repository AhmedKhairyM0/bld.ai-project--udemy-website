import React, { useContext } from "react";
import globalStyles from "../courseDetails.module.css";
import styles from "./topContainer.module.css";
import { CourseRating } from "../../home/components/courseCard";
import { CourseContext } from "../../../contexts/coursesContext";
import moment from 'moment';
import IconLabeledComponent from '../../../common/iconLabeledComponent';

import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import LanguageIcon from '@mui/icons-material/Language';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function TopContainer() {
  const course = useContext(CourseContext);

  return (
    <section className={`${globalStyles.darkContainer} ${globalStyles.paddingContainer}`}>
      <div className={globalStyles.centerContainer}>
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
          {course.instructors.map((instructor, index) => <a href={`#instructor-${index+1}`} key={instructor.id}>{instructor.name}, </a>)}
        </div>
        <div className={globalStyles.flexContainer}>
          <IconLabeledComponent
            icon={<WatchLaterIcon />}
            label={`Last updated ${moment(course.update_date).format('YYYY-MM')}`}
          />
          <IconLabeledComponent icon={<LanguageIcon />} label={course.content_lang} />
          <IconLabeledComponent icon={<ClosedCaptionIcon />} label={course.caption_lang} />
        </div>
        {/*  */}
      </div>
    </section>
  );
}


export default TopContainer;
