import React from "react";
import { useContext } from "react";
import { CourseContext } from "../../../contexts/coursesContext";

import styles from "./instructorComponent.module.css";
import gStyles from "../courseDetails.module.css";

import Typography from "@mui/material/Typography";
import IconLabeledComponent from "../../../common/iconLabeledComponent";
import FadingTextCompontent from "./fadingTextComponent";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupIcon from "@mui/icons-material/Group";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function InstructorsComponent() {
  const course = useContext(CourseContext);
  const instructors = course.instructors;

  return (
    <section className={gStyles.marginContainer}>
      <h2>Instructors</h2>
      {instructors.map((inst, index)=> <InstructorComponent instructor={inst} key={inst.id} idd={`instructor-${index+1}`}/>)}
    </section>
  );
}

function InstructorComponent({ instructor, idd}) {
  const { 
    name,
    image,
    job,
    rate,
    reviews_num,
    students_num,
    courses_num,
    bio,
  } = instructor;

  return (
    <div className={styles.insctructorSection} id={idd}>
      <Typography className={styles.insctructorName}>{name}</Typography>
      <Typography className={styles.insctructorJob}>{job}</Typography>
      <div className={styles.insctructorProfile}>
        <div className={styles.insctructorImage}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.insctructorInfo}>
          <IconLabeledComponent
            icon={<StarIcon />}
            label={`${Number(rate.toFixed(1))} Instructor Rating`}
          />
          <IconLabeledComponent
            icon={<WorkspacePremiumIcon />}
            label={`${reviews_num} Reviews`}
          />
          <IconLabeledComponent
            icon={<GroupIcon />}
            label={`${students_num} Students`}
          />
          <IconLabeledComponent
            icon={<PlayCircleFilledWhiteIcon />}
            label={`${courses_num} Courses`}
          />
        </div>
      </div>
      <FadingTextCompontent>
        {bio.map((item) => (
          <>
            <Typography>{item}</Typography>
            <br />
          </>
        ))}
      </FadingTextCompontent>
    </div>
  );
}

export default InstructorsComponent;
