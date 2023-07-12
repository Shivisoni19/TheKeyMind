import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const MicrosoftOfc2013Main = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img
                src="img/subpages/office-2013.jpg"
                style={{ width: "70%" }}
              />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              Get Microsoft Office 2013 with a lifetime license from TheKeymind.
              Activate it directly with the official Microsoft ISO and receive
              your license in minutes via email. Enjoy the benefits of a
              lifetime license that is yours forever. Upgrade to Microsoft
              Office 2013 today.
            </p>
            <h4>Microsoft Office 2013 Suite</h4>
            <p>
            Upgrade to Microsoft Office 2013 and enjoy its high performance and intuitive interface. Our licenses are 100% original, offer lifetime validity, and are compatible with both 32-bit and 64-bit versions. 
            </p>
            <p>Purchase the complete Office 2013 Suite, receive activation instructions and your Microsoft license within minutes, and count on our dedicated customer service for assistance. Protect your device with an antivirus of your choice. Upgrade to Microsoft Office 2013 from TheKeymind today.</p>
            <h4>Office 2016 Compatibility: Windows 10 and More</h4>
            <p>
              Enjoy seamless compatibility between Office 2013 and Windows 10. It also works well with Windows 7 and Windows 8/8.1. 
            </p>
            <p>*However, it is not compatible with Windows 11. </p>
            <p>Upgrade to Office 2013 for a smooth experience across multiple Windows versions.</p>
            <h4>
            What will happen to the Lifetime license of Office 2013 on formatting or replacing devices?
            </h4>
            <p>
            Our Microsoft Office 2013 license is a lifetime license, meaning you own it permanently without any recurring fees. You can use it on your computer or device, even after formatting or replacing it. 
            </p>
            <p>Just remember to deactivate it on any previous devices before activating it on a new one. Enjoy the benefits of an original Microsoft license with lifetime validity from TheKeymind.</p>
            <h4>
             What consists of my order of Office 2013 from TheKeymind?
            </h4>
            <p>
             When you purchase Microsoft Office 2013 32/64-bit from TheKeymind, you'll receive:
            </p>
            <ul>
              <li>• Activation Code (Product Key) for Office 2013</li>
              <li>
                • Authentic Download link for the ISO file of Microsoft Office 2013(32/64Bit)
              </li>
              <li>• Installation guide for quick and easy setup</li>
              <li>• Free technical support</li>
              <li>• Invoice for your purchase</li>
            </ul>

            <p>Enjoy the convenience of immediate delivery via email, avoiding the environmental impact of shipping physical goods. Install Office 2013 effortlessly and receive support from our team when needed. Purchase your Microsoft Office 2013 license from TheKeymind today..</p>
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

export default MicrosoftOfc2013Main;
