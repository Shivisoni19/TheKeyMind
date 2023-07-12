import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const BitdefenderMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt30">
            <h1>
              <img
                src="img/subpages/Bitdefender-logo.jpg"
                style={{ width: "40%" }}
              />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              Buy your genuine Bitdefender license from TheKeymind and start
              protecting your devices from online threats today. You can be sure
              that you are getting a genuine product and you will receive your
              license instantly in your inbox. Bitdefender Antivirus is
              lightweight and easy to use, and it offers a variety of features
              to protect your devices, such as anti-phishing protection, a
              firewall, and a webcam blocker. Bitdefender Antivirus is
              compatible with Windows, macOS, and Android devices.
            </p>
            <h4>Buy your Bitdefender license from TheKeymind today and start enjoying peace of mind.</h4>
            <h4>Bitdefender 2023: The Best Way to Stay Safe Online</h4>
            <p>
              Get reliable Bitdefender antivirus products from TheKeymind. With years of experience, we offer fast and secure delivery of digital purchases. Choose us for professional service, guaranteed payment methods, and dedicated customer support. We're also committed to the environment, reducing pollutants through digital purchases. Enjoy peace of mind with our refund policy. Join TheKeymind today and protect yourself against cyber threats.re protected
              from viruses, malware, and other cyber threats.
            </p>
            <h4>What to expect when you format your computer after purchasing a Bitdefender subscription</h4>
            <p>
              No need for worrying! Your Bitdefender license from TheKeymind is tied to your account. Simply reinstall the software on your computer or a new device, and enter your credentials. No need to purchase another.
            </p>
            <h4>
              What to expect after purchasing Bitdefender products from TheKeymind
            </h4>
            <p>
              Once you purchase your Bitdefender products from TheKeymind, you can expect:
            </p>
            <ul>
              <li>• Instant delivery via email</li>
              <li>•	1 Bitdefender license key </li>
              <li>•	Official download link for your Antivirus</li>
              <li>
              •	Clear installation instructions manual
              </li>
              <li>•	Dedicated customer service </li>
              <li>•	Invoice for your purchase</li>
            </ul>
            <p>With TheKeymind, you'll receive your Bitdefender products quickly via email, including the license key and official download link. Clear installation instructions will be provided to make the setup process easy. If you have any questions or need assistance, their English customer service is available to help. Plus, you'll receive an invoice for your records.</p>
            <h4>What should I do if I am stuck somewhere?</h4>
            <p>Reach out to our customer service team for free assistance with any issues or inquiries. We are committed to providing prompt and helpful support to resolve your concerns.</p>
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

export default BitdefenderMain;
