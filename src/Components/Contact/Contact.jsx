import React, { useEffect, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import styles from "./Contact.module.css";
import TopNav from "../TopNav/TopNav";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact({ title }) {
  const [isLoading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgdiloo', 'template_qh7t01y', form.current, '9pDYr4kMqqYeCHgs7')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
        alert('Message Sending Failed');
      });

    e.target.reset();
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            id={`${styles.contact}`}
            className="d-flex justify-content-center align-items-center"
          >
            <TopNav title={"Contact"} />
            <div className="container pt-5">
              <div className="row gy-3">
                <div
                  className="col-lg-4 d-flex justify-content-center align-items-start flex-column"
                  data-aos="fade-down"
                >
                  <h3>
                    GET IN TOUCH <br /> GET REAL
                  </h3>
                  <div className="icons d-flex">
                    <a
                      href="https://www.facebook.com/mohamed.doaa.9803/"
                      target="-blank"
                    >
                      <div className={`${styles.icon} mx-2`}>
                        <i className="fa-brands fa-facebook fs-4 text-light fa-fade"></i>
                      </div>
                    </a>
                    <a href="https://github.com/doaa51094" target="-blank">
                      <div className={`${styles.icon} mx-2`}>
                        <i className="fa-brands fa-github fs-4 text-light fa-fade"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/doaa-mohamed-31003b21b"
                      target="-blank"
                    >
                      <div className={`${styles.icon} mx-2`}>
                        <i className="fa-brands fa-linkedin-in fs-4 text-light fa-fade"></i>
                      </div>
                    </a>
                  </div>
                  <ul className="list-unstyled pt-5">
                    <li className="pb-1">
                      <i className="fa-regular fa-envelope pe-2"></i>
                      <span>
                        <a
                          href="mailto:doaa51094@gmail.com"
                          className="text-decoration-none text-light"
                        >
                          doaa51094@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="pb-1 text-light">
                      <i className="fa-solid fa-phone  pe-2"></i>
                      <span> +20 1203821386</span>
                    </li>
                    <li className="pb-1 text-light">
                      <i className="fa-solid fa-location-dot pe-2"></i>
                      <span> Alexandria</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8 col-12" data-aos="fade-left">
                  <div className={`${styles.item} p-5`}>
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="your name"
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        name="subject"
                        placeholder="subject"
                      />
                      <input
                        type="email"
                        className="form-control mt-3"
                        name="email"
                        placeholder="your email"
                      />
                      <textarea
                        name="message"
                        className="form-control mt-3"
                        rows="5"
                        placeholder="your message"
                      ></textarea>
                      <button
                        className="btn text-light px-3 mt-3"
                        type="submit"
                      >
                        Send
                      </button>
                    </form>
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
