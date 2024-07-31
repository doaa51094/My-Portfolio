import React, { useEffect, useState } from "react";
import styles from "../All/All.module.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import { Link } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

export default function All({ title }) {
  const [isLoading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 800);
  }, []);

  const list = [
    { title: "Home", img: img1, path: "/" },
    { title: "About Me", img: img2, path: "/about" },
    { title: "Education", img: img3, path: "/education" },
    { title: "Skills", img: img4, path: "/skills" },
    { title: "Portfolio", img: img5, path: "/portfolio" },
    { title: "Contact", img: img6, path: "/contact" },
  ];
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <section
            id={`${styles.All}`}
            className="d-flex justify-content-center align-items-center"
          >
            <TopNav title={"Doaa Mohamed"} />
            <div className="container p-5">
              <div className="row g-4 ">
                {list.map((item, i) => (
                  <div
                    className="col-lg-4 col-6 d-flex align-items-center flex-column"
                    key={i}
                    data-aos="fade-down"
                  >
                    <Link to={item.path}>
                      <div
                        className={`${styles.imgBg} d-flex justify-content-center align-items-center rounded-3`}
                      >
                        <img src={item.img} alt="" className="" />
                      </div>
                    </Link>
                    <h4 className={`${styles.text} text-center`}>
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
