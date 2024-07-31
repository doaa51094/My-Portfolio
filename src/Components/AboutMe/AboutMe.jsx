import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import TopNav from "../TopNav/TopNav";
import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

export default function AboutMe({ title }) {
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
          <section id={`${styles.about}`} className="d-flex align-items-center">
            <TopNav title={"About Me"} />
            <div className="container py-5 ">
              <div className="row gy-4">
                <div
                  className="col-lg-4 d-flex justify-content-center align-items-center"
                  data-aos="fade-down"
                >
                  <div className={`${styles.aboutImg} text-center `}>
                    <a
                      href="Doaa CV.pdf"
                      className="text-decoration-none"
                      download="Doaa CV.pdf"
                    >
                      <i className="text-white pb-2 fa-3x fa fa-download d-block fa-fade"></i>
                      <h4 className="text-white">DownLoad CV</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 text-light " data-aos="fade-left">
                  <div>
                    <div className={`${styles.dashed} p-3`}>
                      <h3 className={`${styles.aboutContent} pb-2`}>
                        BIT MORE ABOUT ME ?
                      </h3>
                      <p>
                        Hi there! I'm Doaa Mohamed, a passionate front-end developer
                        with expertise in React and Next. I have 2 years
                        of experience crafting dynamic and responsive web
                        applications using these powerful tools. I thrive on
                        building intuitive user interfaces and collaborating
                        with cross-functional teams to deliver high-quality
                        software solutions.
                        Having an in-depth knowledge
                        including advanced HTML5, CSS3, SASS, BootStrap5,
                        JSON, XML,Redux , JavaScript, TypeScript, JQuery, React.js, Next.js,Git and Github.
                      </p>
                      <p>
                        I worked withplugins like Owl Carousel.js - Slick.js -
                        Wow.js - Aos.js and Skitter.js <br />I have Knowledge of
                        APIs, and Regular Expression
                      </p>
                      <ul className="list-unstyled">
                        <li className={`${styles.icons} pb-1`}>
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
                        <li className={`${styles.icons} pb-1`}>
                          <i className="fa-brands fa-github"></i>
                          <span> https://github.com/doaa51094</span>
                        </li>
                        <li className={`${styles.icons} pb-1`}>
                          <i className="fa-brands fa-linkedin"></i>
                          <span>
                            {" "}
                            https://www.linkedin.com/in/doaa-mohamed-31003b21b
                          </span>
                        </li>
                        <li className={`${styles.icons} pb-1`}>
                          <i className="fa-solid fa-phone"></i>
                          <span> +20 1203821386</span>
                        </li>
                        <li className={`${styles.icons} pb-1`}>
                          <i className="fa-solid fa-location-dot"></i>
                          <span> Alexandria</span>
                        </li>
                      </ul>
                    </div>
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
