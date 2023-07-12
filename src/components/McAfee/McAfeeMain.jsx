import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const McAfeeMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt30">
            <h1>
              <img src="img/subpages/McAfee-logo.jpg" style={{ width: "30%" }} />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              McAfee is a leading provider of antivirus software, and its
              products are trusted by millions of users around the world. McAfee
              2023 offers comprehensive protection against viruses, malware,
              ransomware, and other online threats. You can purchase your McAfee
              2023 subscription from TheKeymind with confidence. We guarantee
              that your subscription is genuine, and we offer a full money-back
              guarantee if you are not satisfied. Once you purchase your McAfee
              2023 subscription, you will receive your code instantly in your
              inbox. You can then activate your subscription and start
              protecting your devices. If you need help with your McAfee 2023
              subscription, you can contact TheKeymind's customer support team.
              They are available 24/7 to help you with any problems that you may
              encounter.
            </p>
            <h4>McAfee Antivirus 2023</h4>
            <h4>Looking for comprehensive protection for your computer?</h4>
            <p>
              Consider purchasing a subscription to TheKeymind, a trusted brand
              in computer security. With their professional solutions, you can
              browse the web with confidence, knowing that you are protected
              from viruses, malware, and other cyber threats.
            </p>
            <p>
              Plus, purchasing from a reputable reseller like TheKeymind ensures
              your order is secure and reliable, with a money-back guarantee to
              give you peace of mind. And, by purchasing from a green company
              like TheKeymind, you can help minimize pollution and waste
              associated with traditional transport and packaging methods. Join
              the fight for a better environment today!
            </p>
            <h4>
              What steps should I take if I need to format or replace my PC
              while using McAfee antivirus?
            </h4>
            <p>
              No worries! In case you need to format or replace your PC, you
              just need to reinstall your antivirus software and log in with
              your credentials. Your account holds your active McAfee
              subscription, so there’s no need to purchase another license or
              pay additional fees. Your PC will be protected as long as your
              subscription is valid.
            </p>
            <h4>
              Accessories you get after Purchasing Your McAfee Subscription from
              TheKeymind
            </h4>
            <p>
              When you purchase your McAfee subscription from TheKeymind, you'll
              receive:
            </p>
            <ul>
              <li>• 1 License Code for McAfee Antivirus.</li>
              <li>• The Download Link for your antivirus software.</li>
              <li>• Installation and Activation Instructions Manual</li>
              <li>
                • Customer Support to assist you with any queries or issues.
              </li>
              <li>• Invoice for your purchase.</li>
            </ul>

            <ProductCatalog />
            <p>
              Enjoy your shopping on
              <Link
                href="#"
                className="text-orange"
                style={{ marginLeft: "8px" }}
              >
                thekeymind.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <!--about content end--> */}

      <SoftwareInstallSteps />
    </>
  );
};

export default McAfeeMain;
