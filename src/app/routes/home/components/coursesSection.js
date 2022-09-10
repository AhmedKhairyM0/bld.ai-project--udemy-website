import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CourseCard from "./courseCard";
import styles from "./coursesSection.module.css";

function CoursesSection({ courses }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    if (search === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [search]);

  const coursesArr = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.coursesCardsGrid}>
      {coursesArr.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
}

export default CoursesSection;
