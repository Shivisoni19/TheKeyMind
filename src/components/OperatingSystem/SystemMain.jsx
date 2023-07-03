import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";

const SystemMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div class="blog">
        <div class="container">
          <div class="title">
            <h1>
              <img src="img/brands/1.png" style={{ width: "100%" }} />
            </h1>
          </div>
          <div class="text-to-action">
            <h3 class="text-uppercase-none mb30 f-900">
            Purchase authentic Microsoft Operating Systems from TheKeymind at highly competitive prices. Our digital licenses are 100% genuine and include tracked and secure payment options, backed by a comprehensive refund policy. Experience instant digital delivery immediately after your purchase, accompanied by complimentary Customer Service for any assistance you may require.
            </h3>
            <h4 class="f-900">Purchase Windows Operating Systems:</h4>
            <p>
            Discover the finest Microsoft Windows Operating Systems selection at unbeatable prices from TheKeymind. Experience instant inbox delivery when you order your new Windows OS and enjoy significant savings. Our catalogue encompasses a wide range of Windows editions, including
              <Link href="#" class="text-orange" style={{marginLeft:"10px",marginRight:"10px"}}>
                   Windows7
              </Link>
                   or
              <Link href="#" class="text-orange" style={{marginLeft:"10px"}}>
                   Windows 8.1
              </Link>
              , which are excellent options for older PCs that may not be up-to-date.
            </p>
            <p>
             For more modern Microsoft Operating Systems, we proudly offer Windows 10, one of the most exceptional Microsoft products to date. With its revamped user interface and advanced features for multi-device operation, including touch screens and 2-in-1 devices, Windows 10 is truly remarkable. What's more, Windows 10 allows you to upgrade to Windows 11 for free! Take advantage of our discounted prices on Windows 10 and enjoy the dual benefit of paying less than the MSRP while securing a free upgrade to Windows 11. Additionally, Windows 10 is optimized to maximize the potential of Microsoft Office 2019, an outstanding productivity suite.
            </p>
            <p>
              If you require the latest operating system, look no further than Microsoft Windows 11, now available at TheKeymind. Purchase your Home or Professional license and consider pairing it with Microsoft Office 2021 for optimal software performance and savings. Windows 11 offers a host of advantages, including hardware optimization, enhanced security, collaboration features, co-authoring capabilities, and native Android app support (available in a later update). 
            </p>
            <h4>Windows Operating Systems Download Now!!</h4>
            <p>
            Once you have made your purchase from TheKeymind, gain immediate access to download the Windows Operating System. By doing so, you not only unlock substantial savings from our price list but also receive a 100% genuine and guaranteed product key within seconds of your purchase. Accompanying the product key is an official ISO download link and comprehensive instructions to facilitate a quick and effortless Windows installation process. Rest assured that we exclusively offer secure and tracked payment methods, further backed by a comprehensive refund policy. After your transaction, all the necessary resources will be delivered directly to your inbox, enabling you to independently download and install Windows without requiring any external assistance.
            </p>
            <h4>Seamless Installation: Activate Windows Operating Systems with Digital Licenses</h4>
            <p>
            Complete the final step by installing Windows operating systems using your digital licenses. With these licenses, you have the flexibility to choose and install the Windows version that suits your needs. Simply follow the provided installation instructions, and you'll be up and running with Windows in no time. Enjoy the benefits and features of a genuine Windows operating system, tailored to enhance your computing experience.
            </p>
            <h4>
              Embrace the Convenience of Digital Delivery: 
            </h4>
            <p>
            Experience our professional service and affordable prices through our 100% authorized store. By delivering your order directly to your inbox, we contribute to environmental preservation efforts. This eco-friendly approach reduces the need for physical goods transportation, resulting in decreased emissions and waste. Join us in making the world a greener place, as we proudly operate as an environmentally conscious company.
            </p>
            <h4>Understanding Perpetual Licenses for Windows Operating Systems</h4>
            <p>
              TheKeymind exclusively offers perpetual licenses for Windows Operating Systems in its catalogue. These licenses are associated with your Microsoft Account rather than a specific machine. This means that whenever you need to format your PC or make changes to your hardware, you can simply reuse your product key. By deactivating the previous license, you regain the ability to install your Windows OS again without the need to purchase a new product key. This flexibility allows for seamless reinstallation and ensures that you can continue to enjoy your Windows Operating System without any additional expenses.
            </p>
            <h4>What's Included with the Purchase of a New Windows Operating System?</h4>
            <p><strong>Enjoy substantial savings on the price list when you buy Microsoft Windows from us, coupled with the convenience of receiving your order directly in your inbox within seconds of purchase. Upon checking your email, you'll find a comprehensive package that includes:</strong></p>
            <ol>
              <li>Your Windows Operating System, complete with a 1-user license.</li>
              <li>An official Windows ISO download link ensures a secure and reliable installation process.</li>
              <li>Clear and detailed instructions guide you through the seamless download, installation, and activation of Windows.</li>
              <li>Access to our free English-speaking Customer Service, ready to assist you with any inquiries or concerns.k</li>
              <li>An invoice for your purchase, providing a transparent record of your transaction.</li>
            </ol>
            <p>
              Enjoy your shopping on
              <Link href="#" class="text-orange" style={{marginLeft:"10px"}}>
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

export default SystemMain;
