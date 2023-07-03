import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-content">
        <div className="contact">
          <div className="container">
            <div className="title">
              <h1>
                <i className="fa fa-star"></i> Get in Touch{" "}
                <i className="fa fa-star"></i>
              </h1>
              <div className="title-border"></div>
            </div>

            <p className="subtitle">
              But unfortunately for most of us our role as gardener has never
              been explained to us. And in misunderstanding our role, we have
              allowed seeds of all types, both good and bad, to enter our inner
              garden.
            </p>

            <div className="row">
              <div className="col-md-8">
                <h2>Contact Us</h2>
                <form id="contact-form" action="#">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name*"
                  />

                  <input
                    name="mail"
                    id="mail"
                    type="text"
                    placeholder="Email*"
                  />

                  <input
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Subject"
                  />

                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Your Message*"
                  ></textarea>

                  <input
                    type="submit"
                    value="Send"
                    id="submit_contact"
                    className="medium-button button-red"
                  />
                  <div id="msg" className="message"></div>
                </form>
              </div>
              {/* <!-- end contactfort --> */}
              <div className="col-md-4 touch">
                <h2>INFORMATION</h2>

                <p>
                  <i className="fa fa-map-marker"></i> Little Lonsdale St, Talay
                  Victoria 8011 Philippines
                </p>
                <p>
                  <i className="fa fa-phone"></i> +1 (800) 888 5260 52 63
                </p>
                <Link href="#">
                  <p className="mb40">
                    <i className="fa fa-envelope"></i> samokhinteam@gmail.com
                  </p>
                </Link>

                <h2>Business hours</h2>

                <p className="mb50">
                  Monday – Friday: 9am to 20 pm Saturday: 9am to 17 pm Sunday:
                  day off
                </p>

                <h2>Stay Social</h2>

                <ul>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-envelope"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Content --> */}
    </>
  );
};

export default Contact;
