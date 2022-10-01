import React from "react";
import styles from "./header.module.css";
import headerCover from "../../../../assets/images/background.jpg";

function Header() {
  return (
    <section className={styles.centerContainer}>
      <div className={styles.headerCoverImage}>
        <img src={headerCover} alt="Header Cover" />
      </div>
      <div className={styles.headerCardInfo}>
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
    </section>
  );
}

export default Header;
