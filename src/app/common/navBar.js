import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';

import styles from "./navBar.module.css";

import logo from "../../assets/images/logo-udemy.svg";

function NavBar() {
  const inputRef = useRef();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value !== "")
      navigate(`/?search=${inputRef.current.value}`);
  };

  useEffect(() => {
    
    if (!searchParams.get("search") && inputRef.current.value) {
      searchParams.delete("search");
      inputRef.current.value = "";
    }
  });

  return (
    <nav>
     <span className={`${styles.hide} ${styles.showInMd}`}> <MenuIcon /></span>
      <Link to="/">
        <img src={logo} alt={"Udemy Logo"} className={styles.websiteLogo} />
      </Link>
      <span className={`${styles.navItem} ${styles.hideInMd}`}>Categories</span>
      <form className={`${styles.searchBar} ${styles.hideInMd}`}>
        <button
          className={styles.searchBtn}
          onClick={handleSubmit}
          type="sumbit"
        >
          <SearchIcon />
        </button>
        <input
          ref={inputRef}
          name="search"
          placeholder="Search for anything..."
          onSumbit={handleSubmit}
        />
      </form>
      <span className={styles.hideInLg}>
        <span className={styles.navItem}>Udemy Business</span>
        <span className={styles.navItem}>Tech on Udemy</span>
      </span>
      <span>
        <span className={`${styles.hide} ${styles.showInMd}`}><SearchIcon/></span>
        <ShoppingCartIcon />
      </span>
      <span className={`${styles.groupBtn} ${styles.hideInMd}`}>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}>
          Login
        </span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn1}`}>
          Signup
        </span>
        <span className={`${styles.commonBtn} ${styles.toggleBtn2}`}>
          <LanguageIcon />
        </span>
      </span>
    </nav>
  );
}

export default NavBar;
