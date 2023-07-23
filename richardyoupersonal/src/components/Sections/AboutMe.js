import React from "react";
import Container from "../Layouts/Container";
import ProfileImage from "../../images/self-korea.jpg";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.profile_box}>
        <img className={styles.profile_image} src={ProfileImage} />
        <p>loremimsum blah blah</p>
      </div>
    </div>
  );
}

export default AboutMe;
