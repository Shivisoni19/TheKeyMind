import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const ESETMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img src="img/subpages/ESET-logo.jpg" style={{ width: "30%" }} />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              Protect your devices with ESET 2023 Antivirus, one of the most
              reliable and trusted antivirus brands in the industry. Purchase
              your genuine license from TheKeymind and receive it instantly in
              your inbox. ESET Antivirus is easy to use, lightweight, and
              powerful, providing comprehensive protection against all types of
              online threats.
            </p>
            <h4>Safeguard your data with ESET 2023</h4>
            <p>
              ESET is a leading brand in the antivirus industry, with a
              reputation for providing comprehensive protection against viruses,
              ransomware, and other forms of malware. ESET's 2023 subscription
              plans offer a variety of features to protect your devices,
              including:
            </p>
            <ul>
              <li>• Antivirus protection</li>
              <li>• Anti-phishing protection</li>
              <li>• Firewall</li>
              <li>• Webcam blocker</li>
              <li>• Ransomware protection</li>
              <li>• Parental controls</li>
              <li>• Device optimization</li>
            </ul>
            <p>
              Apart from these, it is very easy to use and is a very lightweight
              software as a result it ensures full protection of your device
              without slowing it down.
            </p>
            <p>
              Here, At TheKeymind your payments are secured and also covered by
              a comprehensive refund policy
            </p>
            <h4>What happens if my device is replaced or formatted?</h4>
            <p>
              Your ESET 2023 subscription is bound to your account, so you can
              use it on any device that you own. If you format your computer,
              you can simply download and install ESET 2023 Antivirus again. You
              won't have to pay a single amount extra.
            </p>
            <p>
              And if you decide to replace your device, you can transfer your
              license to a new computer running Windows, macOS, or Linux. This
              means that you can always be sure that your devices are protected,
              even if you change your hardware.
            </p>
            <h4>What will I receive on subscribing to ESET?</h4>
            <p>
              As soon as you purchase your ESET 2023 from TheKeymind, you will
              receive every necessary accessory in your inbox which are as
              follows:
            </p>
            <ul>
              <li>• ESET Antivirus Activation Code</li>
              <li>• Official Download Link for your Antivirus</li>
              <li>• The Complete guiding manual for activation</li>
              <li>
                • Technical Support, which is always ready to assist you
                whenever you are stuck.
              </li>
              <li>• Invoice of your Purchase</li>
            </ul>
            <h4>What to do if I am dissatisfied with the Product?</h4>
            <p>
              No issues!! We got you covered with our comprehensive Refund
              policy. If you aren’t satisfied with our services just get in
              touch with our Technical team, and they will guide you further for
              the refund process.
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

export default ESETMain;
