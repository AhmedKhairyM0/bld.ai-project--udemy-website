import React from "react";
import { useLocation } from "react-router-dom";
import { CourseProvider } from "../../contexts/coursesContext";
import TopContainer from "./components/topContainer";

// import course from "../../../data/course.json";
import NavShortcutSection from "./components/navShortcutSection";
import WhatLearnComponent from "./components/whatLearn";

import styles from "./courseDetails.module.css";
import ExpansionCourseContent from './components/expansionCourseContent';
import RequirementsComponent from "./components/requirementsComponent";
import DescriptionComponent from "./components/descriptionComponent";
import InstructorsComponent from "./components/instructorComponent";
import ReviewsComponent from "./components/reviewComponent";
import SidebarContainer from "./components/sidebarContainer";

function CourseDetails() {
  const location = useLocation();
  const course = location.state;

  return (
    <CourseProvider value={course}>
      <main>
        {/* top container */}
        <TopContainer />
        <SidebarContainer />
          {/* navigation btns*/}
          {/* <NavShortcutSection /> */}
        <div className={styles.centerContainer}>
          {/* sidebar container introduction */}
          {/* sidebar container purchase */}
          {/* what you will learn */}
          {/* <WhatLearnComponent /> */}
          <ExpansionCourseContent />
          <RequirementsComponent />
          <DescriptionComponent />
          <InstructorsComponent />
          <ReviewsComponent />

        </div>
      </main>
    </CourseProvider>
  );
}

export default CourseDetails;
