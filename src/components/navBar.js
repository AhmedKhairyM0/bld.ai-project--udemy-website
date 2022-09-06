import React from "react";
import styles from "./navBar.module.css";
import logo from "../assets/images/logo-udemy.svg";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt={"Udemy Logo"} className={styles.websiteLogo} />
      </Link>
      <span className={styles.navItem}>Categories</span>
      <span className={styles.searchBar}>
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input name="search" placeholder="Search for anything..." />
      </span>
      <span>
        <span className={styles.navItem}>Udemy Business</span>
        <span className={styles.navItem}>Tech on Udemy</span>
      </span>
      <span className={styles.navItem}>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span className={styles.groupBtn}>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}>Login</span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn1}`}>Signup</span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}><FontAwesomeIcon icon={faGlobe} /></span>
      </span>
    </nav>
  );
}

export default NavBar;
