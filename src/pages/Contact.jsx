import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const meta = {
    title: 'Contact Us | The Keymind',
    description: 'If you have any queries or need any suggestions!! Why not get in touch with us?',
    // canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the googlebot meta tag
    }
  };

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;

  const postContactData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setContactData({ ...contactData, [name]: value });
  };

  // connection with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, message } = contactData;

    if(name && email && phone && message ){
    const res = fetch(
      "https://thekeymind2023-f4c36-default-rtdb.firebaseio.com/contactDataRecords.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );

    if (res) {
      setContactData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // alert("Data Stored");
      // Use toast.success to display a success message
      toast.success("Your Data Stored Successfully");
    } else {
      // alert("Plz fill the Data");
      // Use toast.error to display an error message
      toast.error("Failed to store data");
     }
    }
    else {
      // alert("Plz fill the Data");
      // alert("Plz fill the Data");
      toast.error("Please fill in all the fields");
     }
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <div className="contact-content">
        <div className="contact">
          <div className="container">
            <div className="title">
              <h1>
                <i className="fa fa-star"></i> Get in Touch
                <i className="fa fa-star"></i>
              </h1>
              <div className="title-border"></div>
            </div>

            <p className="subtitle1">
              If you have any queries or need any suggestions!! Why not get in touch with us?
            </p>
            <p className="subtitle1" >
               For more details follow us on our Social media
            </p>

            <div className="row">
              <div className="col-md-8">
                <h2>Contact Us</h2>
                <form id="contact-form" action="#" method="POST">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name*"
                    value={contactData.name}
                    onChange={postContactData}
                  />

                  <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email*"
                    value={contactData.email}
                    onChange={postContactData}
                  />

                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    value={contactData.phone}
                    onChange={postContactData}
                  />

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message*"
                    value={contactData.message}
                    onChange={postContactData}
                  ></textarea>

                  <input
                    type="submit"
                    value="Send"
                    id="submit_contact"
                    className="medium-button button-red"
                    onClick={submitData}
                  />
                  {/* Add the ToastContainer component here */}
                  <ToastContainer />
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
