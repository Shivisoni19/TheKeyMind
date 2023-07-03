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

const Accordian4 = () => {
  const accordionItems = [
    {
      title: "Analytics",
      content: [
        "The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.",
        "Meta ads conversion tracking (Meta pixel) (Meta Platforms Ireland Limited)",
        "Meta Ads conversion tracking (Meta pixel) is an analytics service provided by Meta Platforms Ireland Limited that connects data from the Meta Audience Network with actions performed on this Website. The Meta pixel tracks conversions that can be attributed to ads on Facebook, Instagram and Meta Audience Network.",
        "Personal Data processed: Trackers and Usage Data.",
        "Place of processing: Ireland – Privacy Policy.",
        "Storage duration:",
        "_fbp: 3 months",
        "fr: 3 months",
        "Storage duration:",
        "_fbp: 3 months",
        "Google Analytics 4 (Google Ireland Limited)",
        "Google Analytics 4 is a web analysis service provided by Google Ireland Limited (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services.Inc.",
        "Google may use the Data collected to contextualize and personalize the ads of its own advertising network.In Google Analytics 4, IP addresses are used at collection time and then discarded before Data is logged in any data center or server. Users can learn more by consulting Google’s official documentation.",
        "Personal Data processed: Trackers and Usage Data.",
        "Place of processing: Ireland – Privacy Policy – Opt Out."
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

export default Accordian4;
