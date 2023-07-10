import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";
import ProductCatalog from "../ProductCatalog";

const PageMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div class="blog">
        <div class="container">
          <div class="title">
            <h1>
              <img src="img/subpages/Windows11.jpg" style={{ width: "20%" }} />
            </h1>
          </div>
          <div class="text-to-action">
            <h3 class="text-uppercase-none mb30 f-900">
              * Please note that if you purchase a Windows 7 or Windows 8
              operating system, it's important to be aware that you will no
              longer be eligible for a direct upgrade to Windows 10.*
            </h3>
            <h4 class="f-900">
              Windows 7: A Timeless and Widely Loved Operating System
            </h4>
            <p>
              Purchase your Windows 7 license at the best price from TheKeymind,
              a trusted reseller of Microsoft products. Windows 7 Operating
              System is highly stable and reliable, making it a beloved choice
              for many users. Ensure the security of your devices by installing
              a valid and effective antivirus to protect against cyber-attacks.
            </p>
            <p>
              Windows 7 offers Home, Professional, and Ultimate editions with
              enhanced UI and support for tablets and multi-touch devices.
              Customize your desktop with widgets and enjoy improved usability.
            </p>
            <p>
              TheKeymind offers secure transactions, guaranteed and tracked
              payments, instant delivery to your inbox, free English-speaking
              customer service, and a full money-back warranty. Upon completing
              your order, you'll receive an email with instructions to download,
              install, and activate Windows 7. By choosing digital delivery, you
              contribute to reducing pollution and waste.
            </p>
            <p>
              Buy your Windows 7 license from TheKeymind and help us protect the
              environment through digital delivery.
            </p>
            <h4>
              Compatibility of Windows 7 Operating System with Office Suite
            </h4>
            <p>
              Windows 7 is compatible with Microsoft Office Suite, including
              versions such as Office 2016, Office 2013, and Office 2010. These
              editions work seamlessly with Windows 7, providing you with a
              range of options to meet your needs. For Mac users, there is a
              version of Microsoft Office specifically designed for macOS
              available.
            </p>
            <p>
              However, it's important to note that Windows 7 is not compatible
              with the latest versions of Microsoft Office, such as Office 2021
              and Office 2019. If you're using Windows 7, it's recommended to
              choose from the compatible versions mentioned above for full
              compatibility and functionality.
            </p>

            <ProductCatalog />
            <h4>
              Windows 7*: Please note that Microsoft ended support and updates
              for Windows 7 on January 14, 2020. While it can still be
              purchased, installed, and used, Microsoft no longer provides
              support or releases updates for this operating system. As a
              result, we will supply you with a download link for the Windows 7
              ISO file to facilitate the installation process.
            </h4>
            <h4>Consequences of formatting or replacing my computer</h4>
            <p>
              The Windows 7 Operating System license you purchased from
              TheKeymind is perpetual, which means you won't need to buy a new
              product key if you format or replace your computer.
            </p>
            <p>
              Simply reinstall the operating system, enter your license key, and
              you're all set! However, please keep in mind that your license is
              valid for a single device, so make sure to deactivate your
              previous license before activating the new installation.
            </p>

            <h4>Contents of the Windows 7 Operating System license purchase</h4>
            <p>
              Included in your purchase of the Windows 7 Operating System
              license, you will receive a comprehensive package that equips you
              with everything you need:
            </p>
            <ol>
              <li>
                • One product key for Windows 7 Operating Systems (one key per
                device, perpetual)
              </li>
              <li>• Step-by-step instructions.</li>
              <li>• Download the link to the ISO file.</li>
              <li>• Supportive Customer Service</li>
              <li>• Invoice</li>
            </ol>

            <h4>
              Embracing digital delivery, we ensure a seamless and eco-friendly
              experience, avoiding the environmental impact associated with
              physical shipping.
            </h4>
            <div>
              <h4 className="mt30 mb10">System Requirements:</h4>
              <table className="mb20">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Minimum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Processor</td>
                    <td>1 GHz</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>1GB (32-bit); 2GB (64-bit)</td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td>16GB (32-bit); 20GB (64-bit)</td>
                  </tr>
                  <tr>
                    <td>Graphics</td>
                    <td>DirectX 9 compatible GPU, WDDM driver 1.0 or higher</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Enjoy your shopping on
              <Link href="#" class="text-orange">
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

export default PageMain;
