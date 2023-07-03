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

const Accordian6 = () => {
  const accordionItems = [
    {
      title: "Definitions and legal referencesn",
      content: [
        "Personal Data (or Data)",
        "Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.",
        "Usage Data",
        "Information collected automatically through this Website (or third-party services employed in this Website), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Website, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.",
        "User",
        "The individual using this Website who, unless otherwise specified, coincides with the Data Subject.",
        "Data Subject",
        "The natural person to whom the Personal Data refers.",
        "Data Processor (or Data Supervisor)",
        "The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.",
        "Data Controller (or Owner)",
        "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Website. The Data Controller, unless otherwise specified, is the Owner of this Website.",
        "This Website (or this Application)", 
        "The means by which the Personal Data of the User is collected and processed."
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

export default Accordian6;
