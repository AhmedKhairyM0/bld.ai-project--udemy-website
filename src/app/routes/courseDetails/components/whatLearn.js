import React, { useContext } from "react";
import { CourseContext } from "../../../contexts/coursesContext";
import styles from "./whatLearn.module.css";

function WhatLearnComponent() {
  const course = useContext(CourseContext);
  const { title, body } = course.what_learn;

  return (
    <div id="overview" className={styles.whatLearnSection}>
      <h2>{title}</h2>
      <div className={styles.whatLearnBody}>
        {body.map((item, index) => (
          <div key={`${index}`} className={styles.whatLearnElement}>
            <span className={styles.checkMarkSymbol}></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatLearnComponent;
