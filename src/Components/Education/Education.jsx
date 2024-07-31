import React, { useEffect, useState } from "react";
import styles from "./Education.module.css";
import StarIcon from "../StarIcon/StarIcon";
import TopNav from "../TopNav/TopNav";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

export default function Education({ title }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            id={`${styles.education}`}
            className="d-flex align-items-center "
          >
            <TopNav title={"Education"} />
            <div className="container p-3">
              <div
                className={`${styles.educationItem} row p-4 text-light g-4 m-1`}
                data-aos="zoom-in"
              >
                <div className="col-lg-6">
                  <h3 className="pt-2">
                    <i className="fa-solid fa-graduation-cap fa-fade"></i>{" "}
                    Education
                  </h3>
                  <StarIcon style="ps-4 pb-2" />
                  <div
                    className={`${styles.resumeItem} position-relative ps-3 pb-2`}
                  >
                    <h4>Bachelor of Science</h4>
                    <h5 className="text-dark p-1"> 2021/2022</h5>
                    <p>
                      Faculty of science, Alexandria University
                      <br />
                      Mathematics&amp; Computer Science Department
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="pt-2">
                    <i className="fa-solid fa-code fa-fade"></i> Courses
                  </h3>
                  <StarIcon style="ps-4 pb-2" />
                  <div
                    className={`${styles.resumeItem} position-relative ps-3 pb-2`}
                  >
                    <h5 className="text-dark p-1"> Aug 2022 - Nov 2022</h5>
                    <p>
                      {" "}
                      Diploma Front-end Developer in Route Academy Egyptian IT-
                      Training Center.
                    </p>
                    <h5 className="text-dark p-1"> 2021</h5>
                    <p>JavaScript(sera Courses)</p>
                    <h5 className="text-dark p-1"> 2020</h5>
                    <p>Matlab Training</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
