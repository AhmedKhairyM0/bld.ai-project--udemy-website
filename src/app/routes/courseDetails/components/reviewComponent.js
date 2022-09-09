import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { CourseRating } from "../../home/components/courseCard";
import styles from "./reviewComponent.module.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import moment from "moment";
import { CourseContext } from "../../../contexts/coursesContext";

const CircleButton = ({ icon }) => {
  return (
    <button className={`${styles.circle} ${styles.smCircle} ${styles.btn}`}>
      {icon}
    </button>
  );
};

const getNickName = (name) => {
  let nickName = "";
  name.split(" ").forEach((val) => {
    nickName += val[0];
  });
  return nickName;
};

const ago = (date) => {
  const days = moment().diff(date, "days");

  if (days <= 1) return `a day ago`;
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${(days / 7).toFixed(0)} weeks ago`;
  if (days === 30) return `a month ago`;
  if (days > 30) return `${(days / 30).toFixed(0)} month ago`;
};

function ReviewsComponent() {
  const course = useContext(CourseContext);
  const reviews = course.reviews;

  return (
    <section>
      <h2>Reviews</h2>
      {reviews.map((rev) => (
        <ReviewComponent key={rev.id} review={rev} />
      ))}
    </section>
  );
}

function ReviewComponent({ review }) {
  const { id, reviewer, createAt, rate, review_text, helpful } = review;
  return (
    <div className={styles.review}>
      <div className={styles.div1}>
        <div className={`${styles.profile} ${styles.circle}`}>
          {getNickName(reviewer)}
        </div>
        <div>
          <Typography>{reviewer}</Typography>
          <Typography>
            <CourseRating stars={rate} />
            <span>{ago(createAt)}</span>
          </Typography>
        </div>
      </div>
      <div className={styles.div2}>
        <Typography>{review_text}</Typography>
        <Typography>Was this review helpful?</Typography>
        <div className={styles.reviewActionsSection}>
          <CircleButton icon={<ThumbUpOutlinedIcon />} />
          <CircleButton icon={<ThumbDownOutlinedIcon />} />
          <a href="#">Report</a>
        </div>
      </div>
    </div>
  );
}

export default ReviewsComponent;
