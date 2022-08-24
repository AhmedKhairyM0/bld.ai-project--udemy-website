import React from "react";
import CoursesCards from "./coursesCards";
import "./coursesTabContent.css";

function CoursesTabContent({ coursesTab }) {
  return (
    <div className="courses-tab-content">
      <h2 className="courses-tab-heading">{coursesTab.heading}</h2>
      <p className="courses-tab-desc">{coursesTab.description}</p>
      <a href={coursesTab.url} className="courses-explore-btn">{`Explore ${coursesTab.name}`}</a>
      <CoursesCards courses={coursesTab.courses} />
    </div>
  );
}

export default CoursesTabContent;
