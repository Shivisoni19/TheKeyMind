import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const AvastVPNMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img src="img/subpages/avast-logo.jpg" style={{ width: "50%" }} />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
            Avast 2023 is now available at TheKeymind! Buy your genuine license at the best price for instant delivery to your inbox. Stay protected from cyber threats and hackers with one of the most popular antiviruses.
            </p>
            <h4>Secure Your Digital World with Avast 2023 - Fulfilling the Promise</h4>
            <p>
            Get Avast, the popular antivirus brand, at TheKeymind. Protect your devices with features like network vulnerability detection, password safeguard, and critical threat scanning. Buy a genuine license from TheKeymind, enjoy instant delivery to your inbox, and receive free English customer service. Rest easy with our money-back warranty. Join us in protecting the environment - TheKeymind is a 100% green company.
            </p>
            <h4>Handling PC Formatting or Device Replacement: What to Expect</h4>
            <p>
            Your Avast 2023 subscription purchased from TheKeymind is linked to your account, not a specific device. This means that if you need to format your computer or replace a device, the process is simple.
            </p>
            <p>Just download and reinstall your Avast product on the new device, then log in using your account credentials. This allows you to access and activate your Avast subscription without any issues. Remember to adhere to the device limit specified in your subscription plan.</p>
            <p>At TheKeymind, we prioritize providing a seamless experience for managing your Avast 2023 subscription. Enjoy the convenience and flexibility of accessing your Avast protection on the devices that suit your needs.</p>
            <h4>
            What are the next steps after purchasing an Avast product from TheKeymind?
            </h4>
            <p>
            Upon completing your purchase from TheKeymind, you'll receive the following:
            </p>
            <ul>
              <li>•	1 Avast product activation code </li>
              <li>•	Official download link for Avast product</li>
              <li>•	Installation and activation instructions manual</li>
              <li>•	Free and dedicated customer support</li>
              <li>•	Invoice</li>
            </ul>
            
            <p>
            Rest easy knowing that your Avast Antivirus will be delivered directly to your inbox within seconds, minimizing any environmental impact from physical goods shipping. Feel free to reach out to our customer support at TheKeymind for assistance with any questions or concerns you may have.
            </p>
            <h4>How do I resolve issues with my product or order?</h4>
            <p>
            If you’re having any problems, please don’t hesitate to contact our customer service team. We’re here to help you 24/7, and we’ll do everything we can to resolve your issue quickly and efficiently.
            </p>
            <p>
            Don’t worry your purchase is covered by the comprehensive refund policy.
            </p>
            
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

export default AvastVPNMain;
