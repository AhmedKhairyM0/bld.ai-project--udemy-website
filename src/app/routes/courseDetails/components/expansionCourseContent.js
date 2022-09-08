import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import styles from "./expansionCourseContent.module.css";
import { CourseContext } from "../../../contexts/coursesContext";
// import { alpha, styled } from "@mui/material/styles";

// const CourseAccordion = styled(Accordion)(({ theme }) => ({
//   content: {
//     flexGrow: 0,
//     margin: "auto",
//     "&$expanded": {
//       flexGrow: 0,
//       margin: "auto",
//     },
//     "&:last-child": {
//       marginLeft: "auto",
//     },
//   },
// }));

function CourseLectureAccordion({ lecture }) {
  const { id, lessons, title, total_estimate_time } = lecture;
  console.log("lecture$$$", lecture);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={styles.courseContentItem}>
          <div href>{title}</div>
          <span className={`${styles.lessonCourse}  ${styles.lessonCourseSpace}`}>
            <span>{lessons.length} lessons</span>
            <span> {total_estimate_time} mins</span>
          </span>
        </Typography>
      </AccordionSummary>
      {lessons.map((lesson) => {
        const { id, title, estimate_time, is_preview } = lesson;

        return (
          <AccordionDetails key={id}>
            <Typography className={styles.courseContentItem}>
              <span className={`${styles.lessonCourse}`}>
                <PlayCircleIcon className={styles.playCourseIcon} />
                <a href>{title}</a>
              </span>
              <span>{estimate_time}:00 mins</span>
            </Typography>
          </AccordionDetails>
        );
      })}
    </Accordion>
  );
}

function ExpansionCourseContent() {
  const course = useContext(CourseContext);
  const lectures = course.content;
  console.log("lectures", lectures);

  return lectures.map((lecture) => (
    <CourseLectureAccordion
      key={lecture.lecture.id}
      lecture={lecture.lecture}
    />
  ));
}

export default ExpansionCourseContent;
