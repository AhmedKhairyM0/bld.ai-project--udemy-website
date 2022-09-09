import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "./courseCard";
import styles from "./coursesSection.module.css";

function CoursesSection({ courses }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const params = searchParams.get("search");

    if (params === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
    console.log('params', params);
  }, [search]);


  const coursesArr = courses.filter((course) => (
    <CourseCard course={course} key={course.id} />
  ));
  return <div className={styles.coursesCardsGrid}>{coursesArr}</div>;
}

export default CoursesSection;
