import React from "react";
import styles from "./Container.module.css";

function Container(props) {
  return (
    <div
      style={{ backgroundColor: props?.bgColor, minHeight: props?.minHeight, opacity: props?.opacity }}
      className={styles.container}
    >
      {props.children}
    </div>
  );
}

export default Container;
