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

const Accordian3 = () => {
  const accordionItems = [
    {
      title: "Interaction with external social networks and platforms",
      content: [
        "This type of service allows interaction with social networks or other external platforms directly from the pages of this Website.",
        "The interaction and information obtained through this Website are always subject to the User’s privacy settings for each social network.",
        "This type of service might still collect traffic data for the pages where the service is installed, even when Users do not use it.",
        "It is recommended to log out from the respective services in order to make sure that the processed data on this Website isn’t being connected back to the User’s profile.",
        "Facebook Like button and social widgets (Facebook, Inc.)",
        "The Facebook Like button and social widgets are services allowing interaction with the Facebook social network provided by Facebook, Inc.",
        "Personal Data processed: Cookies and Usage Data.",
        "Place of processing: United States – Privacy Policy.",
        "Storage duration:",
        "_fbp: 3 months",
        "Twitter Tweet button and social widgets (Twitter, Inc.)",
        "The Twitter Tweet button and social widgets are services allowing interaction with the Twitter social network provided by Twitter, Inc.",
        "Pinterest “Pin it” button and social widgets (Pinterest, Inc.)",
        "The Pinterest “Pin it” button and social widgets are services allowing interaction with the Pinterest platform provided by Pinterest Inc.",
        ""
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

export default Accordian3;
