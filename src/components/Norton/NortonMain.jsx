import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const NortonMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img src="img/subpages/norton-antivirus.png" style={{ width: "50%" }} />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              Norton Antivirus 2023 now available at TheKeymind! Purchase and
              download your genuine license code for complete system protection.
              Activate your subscription instantly and receive free English
              customer support. Rest easy with our full money-back warranty.
              Safeguard your systems with confidence.
            </p>
            <h4>
              Norton Antivirus 2023: Protecting Over 50 Million Users Worldwide
            </h4>
            <p>
              Purchase and download Norton Antivirus, a popular and trusted
              brand in the antivirus market. With over 50 million users, Norton
              is recognized for its robust tools that provide protection against
              viruses, malware, and ransomware. Safeguard your devices, monitor
              online activities, and browse securely and anonymously. Choose the
              ideal plan for your needs and purchase your 100% genuine and
              guaranteed license from TheKeymind. Enjoy secure checkout and
              instant delivery via email. Stay protected with confidence.
            </p>
            <p>
              Protect your systems with Norton Antivirus 2023, available for
              purchase and download on TheKeymind. This powerful antivirus
              solution offers comprehensive protection against viruses, malware,
              and other cyber threats. When you buy Norton Antivirus 2023 from
              TheKeymind, you'll enjoy the following benefits:
            </p>
            <ol>
              <li>
                <strong>Best Price: </strong>
                We offer competitive pricing, ensuring you get the best price
                for your Norton Antivirus 2023 subscription. You'll get the most
                out of your investment with unparalleled value.
              </li>
              <li>
                <strong>Instant Delivery: </strong>
                After completing your purchase, you'll instantly receive the
                necessary product details, including your genuine license key
                and download instructions, delivered directly to your inbox.
              </li>
              <li>
                <strong>Trusted and Genuine: </strong>
                TheKeymind is an authorized reseller, guaranteeing that your
                Norton Antivirus 2023 license is genuine and reliable. We
                provide legitimate software products.
              </li>
              <li>
                <strong>Secure Checkout: </strong>
                Our secure checkout process ensures the safety of your personal
                and payment information. Be confident and shop with us, knowing
                your data is protected.
              </li>
              <li>
                <strong>Expert Customer Support: </strong>
                Our dedicated customer support team is available to assist you.
                If you have any questions or need help with your Norton
                Antivirus 2023 purchase or download, feel free to reach out.
                We're ready to help.
              </li>
            </ol>
            <p>
              Protect your systems now with Norton Antivirus 2023. Visit
              TheKeymind for robust and reliable cyber security.
            </p>
            <h4>
              What are the consequences of formatting your device or purchasing
              a new one?
            </h4>
            <p>
              TheKeymind simplifies the management of your Norton Antivirus
              licenses. When you purchase licenses from TheKeymind, they are
              linked to your account, not a specific device.
            </p>
            <p>
              Here's how it works: As long as you stay within the device limit
              of your subscription plan, you can easily download and reinstall
              Norton Antivirus on your devices. Just access the app with your
              TheKeymind account credentials, and you're good to go!
            </p>
            <p>
              With TheKeymind, there's no need to worry about complex processes
              or transferring licenses. It's a hassle-free way to protect your
              devices with Norton Antivirus. Enjoy the convenience and peace of
              mind that The Key mind provides.
            </p>

            <h4>What if I am stuck somewhere?</h4>
            <p>
              Don’t Worry!! We got you covered Just contact our Customer service
              and we will assist you as soon as possible.
            </p>
            <h4>What Can I Expect in my Norton Order from TheKeymind?</h4>
            <p>
              With TheKeymind, your Norton order is hassle-free and
              environmentally friendly. When you make a secure checkout on
              TheKeymind, you will receive an email instantly with all the
              necessary information to activate Norton 360 Deluxe.{" "}
            </p>
            <p>
              Here's what you can expect to find in the email from TheKeymind:
            </p>
            <ul>
              <li>• 1 Norton subscription activation code </li>
              <li>• Official download link for Norton Antivirus</li>
              <li>
                • Simple and clear instructions on how to install and activate
                your product
              </li>
              <li>• customer service available t</li>
              <li>• Invoice for purchase</li>
            </ul>
            <p>
              No need to wait for physical shipments or worry about the
              environmental impact. TheKeymind ensures that you receive
              everything you need electronically, making the activation process
              quick and convenient. Just check your inbox after your purchase
              and get started with Norton right away.
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

export default NortonMain;
