import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

export default function Home() {
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
          {" "}
          <header
            className={`${styles.home} d-flex justify-content-start align-items-center`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className={`${styles.borderDash} p-3`}>
                    <div className={`${styles.portfolioBlock} p-3`}>
                      <h3>HEY!</h3>
                      <h3>
                        I'M{" "}
                        <span className={`${styles.name} fs-1`}>
                          Doaa Mohamed
                        </span>
                      </h3>
                      <h4>FRONT END DEVELOPER - React.js</h4>
                      <ul className="list-unstyled">
                        <li className="pb-1">
                          <i className="fa-regular fa-envelope"></i>
                          <span>
                            {" "}
                            <a
                              href="mailto:doaa51094@gmail.com"
                              className="text-decoration-none text-white"
                            >
                              doaa51094@gmail.com
                            </a>{" "}
                          </span>
                        </li>
                        <li className="pb-1">
                          <i className="fa-brands fa-github"></i>
                          <span> https://github.com/doaa51094</span>
                        </li>
                        <li className="pb-1">
                          <i className="fa-brands fa-linkedin"></i>
                          <span>
                            {" "}
                            https://www.linkedin.com/in/doaa-mohamed-31003b21b
                          </span>
                        </li>
                        <li className="pb-1">
                          <i className="fa-solid fa-phone"></i>
                          <span> +20 1203821386</span>
                        </li>
                        <li className="pb-1">
                          <i className="fa-solid fa-location-dot"></i>
                          <span> Alexandria</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
}
