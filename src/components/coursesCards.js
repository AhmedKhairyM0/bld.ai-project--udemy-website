import CourseCard from "./courseCard";
import "./coursesCards.css";

function CoursesCards({ courses }) {
  const coursesArr = courses.map((course) => (
                    <CourseCard course={course} key={course.id} />
                ));
  return <div className="courses-cards-grid">{coursesArr}</div>;
}

export default CoursesCards;
