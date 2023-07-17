import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const WindowsServerMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div className="blog">
        <div className="container">
          <div className="title mt0">
            <h1>
              <img
                src="img/subpages/windows-server.png"
                style={{ width: "50%" }}
              />
            </h1>
          </div>
          <div className="text-to-action">
            <p>
              Discover the convenience of our digitally delivered products with
              SSL-secured payments and a comprehensive refund policy. Experience
              the exceptional benefits of shopping at TheKeymind, including free
              English-speaking customer service. Explore our seamless buying
              experience and save on Microsoft Windows Server today!
            </p>
            <h4>
              Get the Best Price on Microsoft Windows Server from TheKeymind
            </h4>
            <p>
              Unlock the power of Microsoft Windows Server at highly competitive
              prices. Designed for servers, Windows Server is a versatile
              operating system by Microsoft Corporation. Whether you need to
              centralize networking features or manage a large IT
              infrastructure, TheKeymind has you covered.
            </p>
            <p>
              Choose from a range of Windows Server editions to meet your
              specific needs. From Windows Server 2012 Essentials for
              cost-effective solutions to Windows Server 2019 Datacenter or
              Windows Server 2022 Datacenter for high-performance systems, our
              catalog has it all.
            </p>
            <p>
              Maximize your company's workflows and efficiently manage your
              hosts with Microsoft Windows Server from TheKeymind. Shop now and
              enjoy the best price for your Windows Server needs.
            </p>
            <h4>
              Instant Digital Delivery: Download Microsoft Windows Server
              Immediately After Purchase
            </h4>
            <p>
              Experience immediate access to Microsoft Windows Server with
              TheKeymind. After a secure transaction, you'll receive a genuine
              digital license, an official download link, and clear instructions
              for quick installation and activation on your device.
            </p>
            <p>
              Explore our catalog for CAL licenses, including Windows Server
              2022 (DEVICE or USER), and discover a wide range of Windows
              Storage Server products for all your storage needs. Get started
              with TheKeymind and enjoy seamless digital delivery today!
            </p>
            <h4>Windows Server: Business</h4>
            <p>
              With vast experience over the years, TheKeymind offers fast and
              reliable digital software delivery. Join the list of satisfied
              customers worldwide and enjoy our unbeatable prices and 100%
              guaranteed licenses. Trust our prompt customer support and secure
              payment options like PayPal. Instantly receive your order in your
              inbox with a full money-back warranty. Choose TheKeymind for
              efficient and eco-friendly shopping!
            </p>
            <h4>
              Discover the Variety of Windows Server Licenses Offered by
              TheKeymind
            </h4>
            <p>
              At TheKeymind, all products in our catalog, including Microsoft
              Windows Server, are covered by perpetual licenses. Whether you
              choose Windows Server 2016 Essentials, Windows Server 2019
              Standard, or any other product from our extensive catalog
              (including Windows Storage Server suites for your storage
              appliances), you can enjoy the benefit of your license(s) without
              the need for repeat purchases during reinstallation or
              seat/machine restoration.
            </p>
            <p>
              Our licenses are tied to specific credentials rather than hardware
              combinations, offering you flexibility and convenience. Experience
              this key advantage when you shop with TheKeymind!
            </p>
            <h4>
              What should I expect of getting after purchasing Windows Server
              from TheKeymind?
            </h4>
            <p>
              Order Your Microsoft Windows Server or Windows Storage Server
              License(s) and Get Instant Access!
            </p>
            <p>
              When you order your license(s) for Microsoft Windows Server or
              Windows Storage Server from us, you'll receive everything you need
              in your inbox. After checkout, check your email for:
            </p>
            <ul>
              <li>
                • Your chosen license(s) for Windows Server or Windows Storage
                Server (quantity may vary based on the version purchased)
              </li>
              <li>• Official download link for setting up ISO file</li>
              <li>• Detailed and user-friendly instructions</li>
              <li>• Detailed and user-friendly instructions</li>
              <li>• Invoice for your records</li>
              <li>• Free Customer Support</li>
            </ul>

            <p>
              Experience hassle-free installation and support with TheKeymind.
              Order your license(s) today and unlock the power of Windows Server
              or Windows Storage Server!
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

export default WindowsServerMain;
