import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import img1 from "../../images/Html5.gif";
import img2 from "../../images/Css3.gif";
import img3 from "../../images/BS.png";
import img4 from "../../images/icons8-javascript.gif";
import img5 from "../../images/Typescript.gif";
import img6 from "../../images/Jquery.gif";
import img7 from "../../images/react-1-logo-svgrepo-com.svg";
import img8 from "../../images/sass-original.svg";
import img9 from "../../images/icons8-github.gif";
import img10 from "../../images/redux.gif";
import img11 from "../../images/nextjs.svg";
import StarIcon from "../StarIcon/StarIcon";
import TopNav from "../TopNav/TopNav";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

export default function Skills({ title }) {
  const list = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
  ];
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
          <section
            id={`${styles.skills}`}
            className="d-flex align-items-center "
          >
            <TopNav title={"Skills"} />
            <div className="container">
              <div
                className={`${styles.skillsItem} row d-flex  align-items-center text-center`}
                data-aos="zoom-in"
              >
                <h3 className="pt-3">My Skills</h3>
                <StarIcon style="justify-content-center" />
                {list.map((item, i) => (
                  <div className="col-lg-2 col-6  py-4" key={i}>
                    <img src={item.img} className="p-2" alt="" />
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
