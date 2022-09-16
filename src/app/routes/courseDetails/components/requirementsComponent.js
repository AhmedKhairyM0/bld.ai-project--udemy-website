import { Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CourseContext } from "../../../contexts/coursesContext";

import styles from "./requirementsComponent.module.css";
import gStyles from "../courseDetails.module.css";

function RequirementsComponent() {
  const course = useContext(CourseContext);
  const requirements = course.requirements;

  return (
    <section className={`${styles.reqSection} ${gStyles.marginContainer}`}>
      <h2>{requirements.title}</h2>
      <div className={styles.reqBody}>
        <ul>
          {requirements.body.map((req) => (
            <li key={req.id}>
              <Typography>{req.item}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RequirementsComponent;
