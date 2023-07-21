import React from "react";
import styles from "./BigLogo.module.css";

function BigLogo() {
  return (
    <div className={styles.logo_box}>
      <span className={`${styles.logo_letter} ${styles.logo_upper}`}>R</span>
      <span className={styles.logo_name}>Richard You</span>
      <span className={`${styles.logo_letter} ${styles.logo_lower}`}>Y</span>
    </div>
  );
}

export default BigLogo;
