import React from "react";
import CoursesSection from "./coursesSection";
import styles from "./coursesTabContent.module.css";

function CoursesTabContent({ coursesTab }) {
  return (
    <div className={styles.coursesTabContent}>
      <h2>{coursesTab.heading}</h2>
      <p className={styles.coursesTabDesc}>{coursesTab.description}</p>
      <a href={coursesTab.url} className={styles.coursesExploreBtn}>{`Explore ${coursesTab.name}`}</a>
      <CoursesSection courses={coursesTab.courses} />
    </div>
  );
}

export default CoursesTabContent;
