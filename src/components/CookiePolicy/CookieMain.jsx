import React from "react";
import Accordian1 from "./Accordian1";
import Accordian2 from "./Accordian2";
import Accordian3 from "./Accordian3";
import Accordian4 from "./Accordian4";
import Accordian5 from "./Accordian5";
import Accordian6 from "./Accordian6";

const CookieMain = () => {
  return (
    <>
      <div className="container" style={{paddingLeft:"0px"}}>
        <div className="cookie-policy">
          <div className="top-content-cookie mb10">
            <h2>Cookie Policy of <strong className="text-orange">thekeymind.com</strong></h2>
            <p>
              This document informs Users about the technologies that help this
              Website to achieve the purposes described below. Such technologies
              allow the Owner to access and store information (for example by
              using a Cookie) or use resources (for example by running a script)
              on a User’s device as they interact with this Website.
            </p>
            <p>
              For simplicity, all such technologies are defined as "Trackers"
              within this document – unless there is a reason to differentiate.
            </p>
            <p>
              For example, while Cookies can be used on both web and mobile
              browsers, it would be inaccurate to talk about Cookies in the
              context of mobile apps as they are a browser-based Tracker. For
              this reason, within this document, the term Cookies is only used
              where it is specifically meant to indicate that particular type of
              Tracker.
            </p>
            <p>
              Some of the purposes for which Trackers are used may also require
              the User's consent. Whenever consent is given, it can be freely
              withdrawn at any time following the instructions provided in this
              document.
            </p>
            <p>
              This Website uses Trackers managed directly by the Owner
              (so-called “first-party” Trackers) and Trackers that enable
              services provided by a third-party (so-called “third-party”
              Trackers). Unless otherwise specified within this document,
              third-party providers may access the Trackers managed by them.
            </p>
            <p>
              The validity and expiration periods of Cookies and other similar
              Trackers may vary depending on the lifetime set by the Owner or
              the relevant provider. Some of them expire upon termination of the
              User’s browsing session.
            </p>
            <p>
              In addition to what’s specified in the descriptions within each of
              the categories below, Users may find more precise and updated
              information regarding lifetime specification as well as any other
              relevant information — such as the presence of other Trackers — in
              the linked privacy policies of the respective third-party
              providers or by contacting the Owner.
            </p>

            <h3 className="mt30">
              Activities strictly necessary for the operation of this Website
              and delivery of the Service
            </h3>
            <span>
              This Website uses so-called “technical” Cookies and other similar
              Trackers to carry out activities that are strictly necessary for
              the operation or delivery of the Service.
            </span>
          </div>
          <Accordian1/>
          <div className="mid-content-cookie">
            <h2>Other activities involving the use of Trackers</h2>
            <h5>Basic interactions & functionalities</h5>
            <p className="mb10">
              This Website uses Trackers to enable basic interactions and
              functionalities, allowing Users to access selected features of the
              Service and facilitating the User's communication with the Owner.
            </p>
            <Accordian2/>
            <h3>Experience enhancement</h3>
            <p className="mb10">
              This Website uses Trackers to provide a personalized user
              experience by improving the quality of preference management
              options, and by enabling interaction with external networks and
              platforms.
            </p>
            <Accordian3/>
            <h3>Measurement</h3>
            <p className="mb10">
              This Website uses Trackers to measure traffic and analyze User
              behavior with the goal of improving the Service.
            </p>
            <Accordian4/>
            <h4>Targeting & Advertising</h4>
            <p>
              This Website uses Trackers to deliver personalized marketing
              content based on User behavior and to operate, serve and track
              ads.
            </p>
            <Accordian5/>
            <h3>How to manage preferences and provide or withdraw consent</h3>
            <p>
              There are various ways to manage Tracker related preferences and
              to provide and withdraw consent, where relevant:
            </p>
            <p>
              Users can manage preferences related to Trackers from directly
              within their own device settings, for example, by preventing the
              use or storage of Trackers.
            </p>
            <p>
              Additionally, whenever the use of Trackers is based on consent,
              Users can provide or withdraw such consent by setting their
              preferences within the cookie notice or by updating such
              preferences accordingly via the relevant consent-preferences
              widget, if available.
            </p>
            <p>
              It is also possible, via relevant browser or device features, to
              delete previously stored Trackers, including those used to
              remember the User’s initial consent.
            </p>
            <p>
              Other Trackers in the browser’s local memory may be cleared by
              deleting the browsing history.
            </p>
            <p>
              With regard to any third-party Trackers, Users can manage their
              preferences and withdraw their consent via the related opt-out
              link (where provided), by using the means indicated in the third
              party's privacy policy, or by contacting the third party.
            </p>
            <h4>Locating Tracker Settings</h4>
            <p>
              Users can, for example, find information about how to manage
              Cookies in the most commonly used browsers at the following
              addresses:
            </p>
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
              <li>Microsoft internet explorer</li>
              <li>Brave </li>
              <li>Opera</li>
            </ul>
            <p>
              Users may also manage certain categories of Trackers used on
              mobile apps by opting out through relevant device settings such as
              the device advertising settings for mobile devices, or tracking
              settings in general (Users may open the device settings and look
              for the relevant setting).
            </p>
            <h4>How to opt out of interest-based advertising</h4>
            <p>
              Notwithstanding the above, Users may follow the instructions
              provided by YourOnlineChoices (EU), the Network Advertising
              Initiative (US) and the Digital Advertising Alliance (US), DAAC
              (Canada), DDAI (Japan) or other similar services. Such initiatives
              allow Users to select their tracking preferences for most of the
              advertising tools. The Owner thus recommends that Users make use
              of these resources in addition to the information provided in this
              document.
            </p>
            <p>
              The Digital Advertising Alliance offers an application called
              AppChoices that helps Users to control interest-based advertising
              on mobile apps.
            </p>
            <h4>Consequences of denying consent</h4>
            <p>
              Users are free to decide whether or not to grant consent. However,
              please note that Trackers help this Website to provide a better
              experience and advanced functionalities to Users (in line with the
              purposes outlined in this document). Therefore, in the absence of
              the User's consent, the Owner may be unable to provide related
              features.
            </p>
            <div className="owner-details">
              <p>Owner and Data Controller</p>
              <span>
                <ul>
                  <li>UK Soft LTD</li>
                  <li>London</li>
                  <li>8 Gainsborough Road</li>
                  <li>Leytonstone E11 1HT</li>
                  <li>Greater London</li>
                  <li>Company Number 12461399</li>
                  <li>Phone: +44 7732150071</li>
                </ul>
              </span>
              <span>
                <strong>Owner contact email:</strong>&nbsp;info@thekeymind.com
              </span>
            </div>
            <p>
              Since the use of third-party Trackers through this Website cannot
              be fully controlled by the Owner, any specific references to
              third-party Trackers are to be considered indicative. In order to
              obtain complete information, Users are kindly requested to consult
              the privacy policies of the respective third-party services listed
              in this document.
            </p>
            <p className="mb10">
              Given the objective complexity surrounding tracking technologies,
              Users are encouraged to contact the Owner should they wish to
              receive any further information on the use of such technologies by
              this Website.
            </p>
            <Accordian6/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieMain;
