import React from "react";
import CoursesSection from "./coursesSection";
import styles from "./coursesTabContent.module.css";

function CoursesTabContent({ coursesTab }) {
  return (
    <div className={styles.coursesTabContent}>
      <h2>Expand your career opportunities with Python</h2>
      <p className={styles.coursesTabDesc}>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll </p>
      <CoursesSection courses={coursesTab} />
    </div>
  );
}

export default CoursesTabContent;
