import React from "react";
import BigLogo from "../Logo/BigLogo";
import styles from './TitlePage.module.css'


function TitlePage() {
  return (
    <div className={styles.container}>
      <BigLogo />
    </div>
  );
}

export default TitlePage;
