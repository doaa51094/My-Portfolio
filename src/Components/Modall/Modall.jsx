import React, { useState } from "react";
import StarIcon from "../StarIcon/StarIcon";
import styles from "./Modall.module.css";

export default function Modall(props) {
  let { heading, image, desc, Live, GitHub } = props;
  return (
    <>
      <div
        className={`${styles.x} modal fade modal-lg `}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className={`${styles.modalBg} modal-content`}>
            <div className="text-center position-relative p-3">
              <h1 className="modal-title fs-2">{heading}</h1>
              <StarIcon style={"justify-content-center"} />
              <div className="position-absolute top-0 end-0 m-3">
                <i
                  className="fa-solid fa-xmark fs-2"
                  data-bs-dismiss="modal"
                ></i>
              </div>
            </div>
            <div className="modal-body">
              <img src={image} className="w-100 " alt="" />
            </div>
            <p className="lead">{desc}</p>
            <div className="p-3">
              <a href={GitHub} target="_blank">
                <button className="btn btn-dark mx-2">GitHub</button>
              </a>
              <a href={Live} target="_blank">
                <button className="btn btn-dark">Live Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
