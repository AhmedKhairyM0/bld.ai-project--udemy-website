import React, { useEffect, useState } from "react";
import { useContext } from "react";
import styles from "./sidebarContainer.module.css";
import { CourseContext } from "../../../contexts/coursesContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconLabeledComponent from "../../../common/iconLabeledComponent";
import Typography from "@mui/material/Typography";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ArticleIcon from "@mui/icons-material/Article";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

function SidebarContainer() {
  // const course = useContext(CourseContext);

  const [fix, setFix] = useState(false);

  const setFixedSideBar = () => {
    console.log("window.scrollY", window.scrollY);
    window.scrollY >= 400 ? setFix(true) : setFix(false);
  };

  window.addEventListener("scroll", setFixedSideBar);

  return (
    <section
      className={`${styles.sideBarContainer}  ${
        fix ? styles.fixedSideBar : styles.block
      }`}
    >
      <button className={`${styles.sideBarIntro} ${fix ? styles.hide : styles.block}`}>
        <img
          className={styles.imageCourse}
          src={`https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg`}
          alt={``}
        />
        <span className={styles.playCourseIcon}>
          <PlayArrowIcon className={styles.playIcon} />
        </span>
        <span className={styles.coursePreview}>Preview this course</span>
      </button>
      <div className={styles.sideBarBody}>
        <Typography className={styles.sideBarPrice}>
          <span className={styles.price}>Eg 149.99</span>
          <span className={styles.oldPrice}>Eg 696.99</span>
          <span className={styles.percentageSale}>78% off</span>
        </Typography>
        <Typography className={styles.saleDays}>
          🕑 1 day left at this price
        </Typography>
        <button className={`${styles.cartBtn} ${styles.btn}`}>
          Add to cart
        </button>
        <button className={`${styles.buyBtn} ${styles.btn}`}>Buy now</button>
        <Typography>30-Day Money-Back Guarantee</Typography>
        <div className={styles.courseIncludes}>
          <h3>This course includes:</h3>
          <IconLabeledComponent
            icon={<LiveTvIcon />}
            label={"14 hours on-demand video"}
          />
          <IconLabeledComponent icon={<ArticleIcon />} label={"1 article"} />
          <IconLabeledComponent
            icon={<SimCardDownloadIcon />}
            label={`3 downloadable resources`}
          />
        </div>
        <div>
          <a className={styles.resource} href="#">Share</a>
          <a className={styles.resource} href="#">Gift this course</a>
          <a className={styles.resource} href="#">Apply Coupon</a>
        </div>
      </div>
    </section>
  );
}

export default SidebarContainer;
