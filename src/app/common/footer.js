import React from "react";
import styles from "./footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import invertLogo from "../../assets/images/logo-udemy-inverted.svg";

function Footer() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.linksBox}>
        <ul>
          <li>Udemy Business</li>
          <li>Tech on Udemy</li>
          <li>Get the app</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>

        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
          <li>Investors</li>
        </ul>

        <ul>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookie settings</li>
          <li>Sitemap</li>
          <li>Accessibility statement</li>
        </ul>
        <div className={styles.languageBox}>
          <LanguageIcon />
          <span>English</span>
        </div>
      </div>

      <div className={styles.logoCopyRightsRow}>
        <div className={styles.logoBox}>
          <img src={invertLogo} alt="Inverted Udemy Logo" />
        </div>
        <div className={styles.copyrightsBox}>© 2022 Udemy, Inc.</div>
      </div>
    </section>
  );
}

export default Footer;
