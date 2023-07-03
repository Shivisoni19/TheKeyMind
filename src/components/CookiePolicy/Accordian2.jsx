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

const Accordian2 = () => {
  const accordionItems = [
    {
      title: "User database managementt",
      content: [
        "This type of service allows the Owner to build user profiles by starting from an email address, a personal name, or other information that the User provides to this Website, as well as to track User activities through analytics features. This Personal Data may also be matched with publicly available information about the User (such as social networks' profiles) and used to build private profiles that the Owner can display and use for improving this Website. Some of these services may also enable the sending of timed messages to the User, such as emails based on specific actions performed on this Website.",
        "ActiveCampaign (ActiveCampaign, Inc.)",
        "ActiveCampaign is a User database management service provided by ActiveCampaign, Inc.",
        "Personal Data processed: email address, Trackers and various types of Data as specified in the privacy policy of the service.",
        "Place of processing: United States – Privacy Policy.",
        "Storage duration:",
        "ac_enable_tracking: 1 month"
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

export default Accordian2;
