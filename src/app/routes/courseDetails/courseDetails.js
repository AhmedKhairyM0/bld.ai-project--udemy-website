import React from "react";
// import { useLocation } from "react-router-dom";
import { CourseProvider } from "../../contexts/coursesContext";
import TopContainer from "./components/topContainer";

import course from "../../../data/course.json";
import NavShortcutSection from "./components/navShortcutSection";

function CourseDetails() {
  // const location = useLocation();
  // const course = location.state;

  return (
    <CourseProvider value={course}>
        <main>
        {/* top container */}
        <TopContainer />

        {/* sidebar container introduction */}
        {/* sidebar container purchase */}
        {/* navigation btns*/}
        <NavShortcutSection />
        {/* what you will learn */}
      </main>
    </CourseProvider>
  );
}

export default CourseDetails;
