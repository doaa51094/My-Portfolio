import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/fp2.gif";

export default function NavBar() {
  return (
    <>
      <div className={`${styles.toggleStrip} rounded `}>
        <ul className="list-unstyled d-flex mb-0">
          <li>
            {" "}
            <button className="btn">
              {" "}
              <Link to="">
                <img src={img1} className={`${styles.navIcon}`} alt="" />
                <div className={`${styles.layer}`}>Home</div>
              </Link>
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="btn">
              <Link to="about">
                <img src={img2} className={`${styles.navIcon}`} alt="" />
                <div className={`${styles.layer}`}>AboutMe</div>
              </Link>
            </button>
          </li>
          <li>
            <button className="btn">
              <Link to="education">
                <img src={img3} className={`${styles.navIcon}`} alt="" />
                <div className={`${styles.layer}`}>Education</div>
              </Link>
            </button>
          </li>
          <li className="text-center">
            <Link to="all">
              <button className="btn border-0">
                <img src={img7} className={`${styles.finger} `} alt="" />
              </button>
            </Link>
          </li>
          <li>
            <button className="btn">
              <Link to="skills">
                <img src={img4} className={`${styles.navIcon}`} alt="" />
                <div className={`${styles.layer}`}>Skills</div>
              </Link>
            </button>
          </li>
          <li>
            <button className="btn">
              <Link to="portfolio">
                <img src={img5} className={`${styles.navIcon}`} alt="" />
                <div className={`${styles.layer}`}>Portfolio</div>
              </Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="btn">
              <Link to="contact">
                <img src={img6} className={`${styles.navIcon}`} alt="" />{" "}
                <div className={`${styles.layer}`}>Contact</div>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
