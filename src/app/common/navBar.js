import React, { useEffect, useRef } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./navBar.module.css";

import logo from "../../assets/images/logo-udemy.svg";

function NavBar() {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputRef.current.value !== "")
    navigate(`/?search=${inputRef.current.value}`);
  };

  useEffect(()=>{
    console.log('searchParams', searchParams)
    if(!searchParams.get("search") && inputRef.current.value) {
      searchParams.delete("search");
      inputRef.current.value = "";
    } 
  })

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt={"Udemy Logo"} className={styles.websiteLogo} />
      </Link>
      <span className={styles.navItem}>Categories</span>
      <form className={styles.searchBar}>
        <button
          className={styles.searchBtn}
          onClick={handleSubmit}
          type="sumbit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          ref={inputRef}
          name="search"
          placeholder="Search for anything..."
          onSumbit={handleSubmit}
        />
      </form>
      <span>
        <span className={styles.navItem}>Udemy Business</span>
        <span className={styles.navItem}>Tech on Udemy</span>
      </span>
      <span className={styles.navItem}>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span className={styles.groupBtn}>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}>
          Login
        </span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn1}`}>
          Signup
        </span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}>
          <FontAwesomeIcon icon={faGlobe} />
        </span>
      </span>
    </nav>
  );
}

export default NavBar;
