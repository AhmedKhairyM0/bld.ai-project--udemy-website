import React from "react";
import "./courseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <a href={course.link}>
        <CourseCardImage image={course.image} title={course.title} />
        <div className="course-title">
          <h3>{course.title}</h3>
        </div>
        <div className="course-instructor">{course.instructor}</div>
        <CourseRating stars={course.stars} views={course.views} />
        <div>
          <span className="course-price">{course.price}</span>
          <span className="course-old-price">{course.old_price}</span>
        </div>
        {course.bestSeller ? (
          <div className="course-bestseller">Bestseller</div>
        ) : null}
      </a>
    </div>
  );
}

function CourseCardImage({ image, title }) {
  return <img src={image} alt={title} />;
}

function CourseRating({ stars, views }) {
  return (
    <>
      <div className="course-rating">
        <span className="course-rating-num">{stars}</span>
        <span className="course-rating-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </span>
        <span className="course-views">{views}</span>
      </div>
    </>
  );
}

export default CourseCard;
