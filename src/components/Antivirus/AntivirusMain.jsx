import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";

const AntivirusMain = () => {
  return (
    <>
      {/* <!--about content --> */}
      <div class="blog">
        <div class="container">
          <div class="title">
            <h1>
              <img src="img/brands/1.png" style={{ width: "100%" }} />
            </h1>
            {/* <!-- <div class="title-border"></div> --> */}
          </div>
          <div class="text-to-action">
            <h3 class="text-uppercase-none mb30 f-900">
              Purchase and Download Antivirus Software for Comprehensive Protection
            </h3>
            {/* <h4 class="f-900">Buy Windows Operating Systems</h4> */}
            <p>
            Protecting your devices from cyber threats is crucial in today's interconnected world. At TheKeymind, we offer a wide selection of top-notch antivirus solutions to safeguard your computer, PCs, Macs, tablets, and smartphones. Our digital catalog includes trusted brands like ESET, AVAST, Norton, Bit Defender, Kaspersky, and McAfee.
            </p>
            <p>
            With our affordable prices and diverse subscription plans, you can find the perfect antivirus software for your specific needs. Whether you're looking for protection on Windows, Mac, iOS, or Android, we have you covered. Rest easy knowing that you can browse, work, and connect online with confidence, thanks to the best antivirus options available.
            </p>
            <p>
            Don't compromise your digital security. Purchase your antivirus from TheKeymind today and enjoy peace of mind knowing that your devices are protected from evolving cyber threats.
            </p>
            <h4>Secure Your Devices with Instant Antivirus Downloads</h4>
            <p>
            Experience hassle-free shopping when you buy and download your antivirus software from our store. We offer top-notch antivirus brands for both Windows and Mac, ensuring compatibility with the latest operating systems like Windows 11 and macOS 12 Monterey. Rest assured knowing your payment is secure and your product will be swiftly delivered to your inbox, minimizing any environmental impact. Safeguard your devices in a matter of seconds and enjoy peace of mind with our efficient antivirus solutions.
            </p>
            <h4>Secure Your Devices with Digital Antivirus Purchases</h4>
            <p>
            At TheKeymind, we prioritize sustainability and environmental responsibility. By delivering our products digitally, we minimize packaging waste and reduce pollution associated with traditional shipping methods. As a 100% Eco-Friendly Company, we are committed to preserving the planet for future generations.
            </p>
            <p>Rest assured that your system's protection is our top priority. With our full money-back warranty, you can purchase with confidence, knowing that we stand behind the quality of our products. Should you have any questions, concerns, or issues, our dedicated English-speaking customer service team is available to provide free assistance and ensure your complete satisfaction.</p>
            <p>Experience the convenience of eco-friendly shopping and outstanding customer support when you choose TheKeymind for your antivirus needs. Join us in protecting your devices and the environment today.</p>
            <h4>
            Will my Antivirus subscription be lost if I format my devices?
            </h4>
            <p>
            When you buy a subscription for one of the top Antivirus Services from TheKeymind for your Windows or Mac computer, your license is tied to your account, not a specific device. So, if you format or replace your device, you don't lose your Antivirus subscription. 
            </p>
            <p>Simply reinstall the product and activate it using your account credentials. And remember, our friendly English-speaking support team is always here to assist you, free of charge!</p>
            <h4>What's included in my Antivirus order from TheKeymind?</h4>
            <p>
            After successfully placing your order for an Antivirus subscription from TheKeymind, you can expect to receive an email with the following components:
            </p>
            <ol>
              <li><strong>Activation code: </strong>This unique code is essential for activating your Antivirus subscription and unlocking its full features and functionality.</li>
              <li><strong>Official download link: </strong>You will receive a secure and authorized download link, enabling you to easily access the Antivirus software and initiate the installation process.</li>
              <li><strong>Installation and activation instructions:  </strong>Clear and detailed instructions will be provided to guide you through the seamless installation and activation of your Antivirus subscription, ensuring a hassle-free experience.</li>
              <li><strong>Free English-speaking customer support:  </strong>Should you have any questions, or concerns, or require assistance at any point, our dedicated customer support team is readily available to provide you with friendly and knowledgeable assistance.</li>
              <li><strong>Invoice: </strong>Along with the other components, we will include an invoice as proof of your purchase. This ensures transparency and allows you to keep a record of your transaction.</li>
            </ol>
            <p>Rest assured that TheKeymind is committed to delivering a streamlined and convenient experience, providing you with all the necessary resources to protect your devices effectively and enjoy a worry-free online experience.</p>
            <h4>Discover a wide range of top-quality products in the TheKeymind catalog:</h4>
            <ol>
              <li><strong>Windows Operating Systems: </strong>Windows 11, Windows 10, Windows 8, Windows 7.</li>
              <li><strong>Microsoft Office Suites available:</strong>: Office 2021, Office 2019, Office 2016, Office 2013, Office 2010, and Office for Mac. Find the perfect suite to meet your specific needs and elevate your work to new heights.</li>
              <li><strong>Antivirus:</strong>Kaspersky, ESET, McAfee, Avast, Bitdefender, Norton.</li>
              <li><strong>VPN: </strong>: VPN for PC, VPN for Mac, VPN for Mobile.</li>
              <li><strong>Microsoft Server:</strong>Windows Server, Windows Server CAL, Windows Server RDS CAL, Microsoft SQL Server.</li>
              <li><strong>Backup and Recovery Software: </strong>AOMEI, EaseUS.</li>
            </ol>
            <p>Explore these exceptional products and more at TheKeymind to meet your technological needs.</p>
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

export default AntivirusMain;
