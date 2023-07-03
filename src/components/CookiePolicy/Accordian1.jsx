import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './Cookie.css'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item1">
      <div className="accordion-header1" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className="accordion-icon1"
        />
      </div>
      {isOpen && (
        <div className="accordion-content1">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordian1 = () => {
  const accordionItems = [
    {
      title: "Tag Management",
      content: [
        "This type of service helps the Owner to manage the tags or scripts needed on this Website in a centralized fashion.",
        "This results in the Users' Data flowing through these services, potentially resulting in the retention of this Data.",
        "Google Tag Manager is a tag management service provided by Google Ireland Limited.",
        "Personal Data processed: Trackers and Usage Data.",
        "Place of processing: Ireland – Privacy Policy.",
      ],
    },
    {
      title: "SPAM Protection",
      content: [
        "This type of service analyzes the traffic of this Website, potentially containing Users' Personal Data, with the purpose of filtering it from parts of traffic, messages and content that are recognized as SPAM.",
        "Google reCAPTCHA is a SPAM protection service provided by Google Ireland Limited. The use of reCAPTCHA is subject to the Google privacy policy and terms of use.",
        "Personal Data processed: Trackers and Usage Data.",
        "Place of processing: Ireland – Privacy Policy.",
        "Storage duration:",
        "_GRECAPTCHA: duration of the session",
        "rc::a: indefinite",
        "rc::b: duration of the session",
        "rc::c: duration of the session",
      ],
    },
  ];

  return (
    <div className="container" style={{paddingLeft:"0px"}}>
      <div className="">
        <div className="top-content-cookie">
          {/* Your top content here */}
        </div>
        <div className="accordion-text1">
          <h4>Third-party Trackers</h4>
          <div className="accordion1">
            {accordionItems.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian1;
