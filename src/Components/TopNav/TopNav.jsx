import React from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";

export default function TopNav({ title }) {
  return (
    <>
      <div
        className={`${styles.TopNavBg} fixed-top text-light text-center mb-3`}
      >
        <h4 className="py-1">
          <i className="fa-solid fa-circle fs-6"></i> {title}
        </h4>
        <Link to="/">
          <div className="position-absolute top-50 translate-middle start-0">
            {" "}
            <i className="fa-solid fa-circle-xmark text-light fs-4 ps-5"></i>
          </div>
        </Link>
      </div>
    </>
  );
}
