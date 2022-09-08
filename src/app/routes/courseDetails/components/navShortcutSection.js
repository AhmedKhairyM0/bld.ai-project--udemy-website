import React from 'react'
import styles from "./navShortcutSection.module.css";
import globleStyles from "../courseDetails.module.css";

function NavShortcutSection() {
  return (
    <section>
        <div className={`${styles.navShortcutSection} ${globleStyles.centerContainer}`}>
            <a href="#overview">Overview</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#instructor">Instructor</a>
            <a href="#reviews">reviews</a>
        </div>
        <div className={styles.underline}></div>
    </section>
  )
}

export default NavShortcutSection