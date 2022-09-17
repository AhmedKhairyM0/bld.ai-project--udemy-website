import { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import styles from "./expansionCourseContent.module.css";
import gStyles from "../courseDetails.module.css";

import { CourseContext } from "../../../contexts/coursesContext";

function CourseLectureAccordion({ lecture }) {
  const { lessons, title, total_estimate_time } = lecture;

  return (
    <div>
      <Accordion>
        <div className={styles.accordionHeading}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.courseContentItem}>
              <div href>{title}</div>
              <span className={`${styles.lessonCourse}`}>
                <span>{lessons.length} lessons</span>
                <span> {total_estimate_time} mins</span>
              </span>
            </Typography>
          </AccordionSummary>
        </div>
        {lessons.map((lesson) => {
          const { id, title, estimate_time } = lesson;

          return (
            <AccordionDetails key={id}>
              <Typography className={styles.courseContentItem}>
                <span className={`${styles.lessonCourse}`}>
                  <PlayCircleIcon className={styles.playCourseIcon} />
                  <a>{title}</a>
                </span>
                <span>{estimate_time}:00 mins</span>
              </Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}

function ExpansionCourseContent() {
  const course = useContext(CourseContext);
  const lectures = course.content;
  const numOfShownSection = 5;

  const [showMoreCourses, setShowMoreCourses] = useState(
    numOfShownSection >= lectures.length
  );

  const lecutresComponents = lectures.map((lecture) => (
    <CourseLectureAccordion
      key={lecture.lecture.id}
      lecture={lecture.lecture}
    />
  ));

  let display = showMoreCourses
    ? lecutresComponents
    : lecutresComponents.slice(0, numOfShownSection);

  const handleShowMore = () => {
    setShowMoreCourses(true);
  };

  const getLessonsNum = () => {
    let len = 0;
    lectures.forEach((lect) => {
      len += lect.lecture.lessons.length;
    });

    return len;
  };

  return (
    <section className={gStyles.marginContainer}>
      <h2 className={styles.courseContentHeading}>Course content</h2>
      <Typography>
        {lectures.length} sections • {getLessonsNum()} lectures •{" "}
        {course.includes.total_time_estimate}
      </Typography>
      {display}
      {!showMoreCourses && (
        <button className={styles.showMoreBtn} onClick={handleShowMore}>
          {lectures.length - numOfShownSection} more sections
        </button>
      )}
    </section>
  );
}

export default ExpansionCourseContent;
