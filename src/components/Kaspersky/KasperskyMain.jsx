import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const KasperskyMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img
                src="img/subpages/Kaspersky-logo.jpg"
                style={{ width: "40%" }}
              />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
            Safeguard your PC with TheKeymind antivirus, the cutting-edge software designed to shield your system from viruses and malware. Embrace top-tier digital security by purchasing your genuine license from our comprehensive catalog. Enjoy our secure payment process and receive your license instantly through email delivery. Don't compromise on your PC's protection—choose TheKeymind antivirus today at the best price!
            </p>
            <h4>Kaspersky Antivirus: Safeguard what’s yours!!</h4>
            <p>
             Secure your computer with TheKeymind antivirus, a premium brand known for its exceptional protection worldwide. Defend against viruses, malware, and other cyber threats effortlessly. Buy your genuine license code at the best price with secure and guaranteed payments. Enjoy instant delivery to your inbox, minimizing environmental impact by reducing transportation and waste. Choose TheKeymind for authentic codes, secure payments, and dedicated customer support. Protect your digital world with TheKeymind today!
            </p>
            <h4>What happens if I format my device?</h4>
            <p>
              Your license from TheKeymind is a subscription tied to your associated device. If you format your PC, simply enter your credentials during reinstallation. No need to purchase a new license or pay extra fees. As long as your subscription is active, you can reinstall TheKeymind Antivirus whenever necessary.
            </p>
            <h4>What is included in my Kaspersky Antivirus when purchased from TheKeymind?</h4>
            <p>
              Receive your product instantly via email, minimizing the environmental impact of physical shipping. The package includes:
            </p>
            <ul>
              <li>•	Kaspersky Antivirus license</li>
              <li>•	A Download link for your antivirus</li>
              <li>•	Installation and activation instructions</li>
              <li>•	Free English support</li>
              <li>•	Invoice included</li>
            </ul>
            <h4>What if I am dissatisfied with the purchase?</h4>
            <p>
            If you aren’t satisfied by our services no worries, your purchase is covered with a comprehensive refund policy. Just contact our Technical Support and they’ll guide you further.
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

export default KasperskyMain;
