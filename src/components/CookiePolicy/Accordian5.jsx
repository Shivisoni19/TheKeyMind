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

const Accordian5 = () => {
  const accordionItems = [
    {
      title: "Commercial affiliation",
      content: [
        "This type of service allows this Website to display advertisements for third-party products or services. Ads can be displayed either as advertising links or as banners using various kinds of graphics. Clicks on the icon or banner posted on the Application are tracked by the third-party services listed below, and are shared with this Website..",
        "For details of which data are collected, please refer to the privacy policy of each service.",
        "TradeTracker (TradeTracker.com)",
        "TradeTracker is a commercial affiliation service provided by TradeTracker.com.",
        "Personal Data processed: Trackers and Usage Data.",
        "Place of processing: See the TradeTracker privacy policy – Privacy Policy.",
        "CJ Affiliate (Epsilon International UK Ltd (part of Publicis Groupe))",
        "CJ Affiliate is a commercial affiliation service provided by Epsilon International UK Ltd (part of Publicis Groupe).",
        "Personal Data processed: purchase history, Trackers and Usage Data.",
        "Place of processing: United Kingdom – Privacy Policy.",
        "Storage duration:",
        "cje: 2 years"
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

export default Accordian5;
