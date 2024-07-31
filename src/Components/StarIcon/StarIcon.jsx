import React from "react";
import styles from "./StarIcon.module.css";

export default function StarIcon(props) {
  const { style } = props;
  return (
    <>
      <div className={`${style} mt-1 d-flex align-items-center `}>
        <div className={`${styles.brdr}`}></div>
        <i className={`${styles.icon} fa-solid fa-star px-1`}></i>
        <div className={`${styles.brdr}`}></div>
      </div>
    </>
  );
}
