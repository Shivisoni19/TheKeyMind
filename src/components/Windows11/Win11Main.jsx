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
            {/* <h3 class="text-uppercase-none mb30 f-900">
              * Please note that if you purchase a Windows 7 or Windows 8
              operating system, it's important to be aware that you will no
              longer be eligible for a direct upgrade to Windows 10.*
            </h3> */}
            <h4 class="f-900">
               Discover the Benefits of Windows 11: Buy Now on TheKeymind
            </h4>
            <p>
            Experience the latest operating system from Microsoft, Windows 11. With a modern UI, enhanced performance, and new features for creators and developers, Windows 11 takes your computing experience to the next level. Purchase your Windows 11 product key from TheKeymind and enjoy all the benefits this functional and lightweight system has to offer
            </p>
            <p>
            Compatible with Office 2021 Professional Plus, Windows 11 is optimized for productivity right from day one. Whether you're a gamer or a professional, Windows 11 caters to your needs with better integration with Xbox Game Pass and advanced encryption features. 
            </p>
            <p>
            Protect your device with the best antivirus and a VPN for Windows 11. Remember to back up your system and data before installing the new OS. Explore the wide range of Microsoft Server products also available for business customers in TheKeymind catalog. Upgrade to Windows 11 now and unleash the full potential of your machine.
            </p>
            <h4>
              Windows 11: Professional
            </h4>
            <p>
            Upgrade to Windows 11 Pro for advanced features, enhanced security, and greater control. Ideal for small and medium-sized businesses, Windows 11 Pro offers encryption, device management, virtualization, and Linux app support. Activate Windows 11 Pro immediately after purchase and enjoy an advanced and secure operating system. Free upgrade is available for Windows 10 users with the same version, while Windows 10 Home users can purchase the upgrade to Windows 11 Pro.
            </p>
            <h4>Windows 11: Home</h4>
            <p>Upgrade to Windows 11 Home for a reliable, high-performance, and user-friendly operating system designed for home users. While it may not have the advanced features found in the Professional and Enterprise versions, Windows 11 Home provides a dependable and easy-to-use computing experience. Choose Windows 11 Home for a seamless upgrade that meets your needs for a reliable and user-friendly operating system.</p>
            <h4>Windows 11: Enterprise</h4>
            <p>Tailored for large enterprises and government organizations, Windows 11 Enterprise delivers advanced features for virtualization, device encryption, centralized management, and Linux application support. It offers secure network access, making it an ideal choice for organizations, including those using open-source software. Empower your organization with Windows 11 Enterprise's advanced capabilities.</p>
            <h4>Upgrade to Windows 11: Unleash a Powerful Computing Experience</h4>
            <p>Upgrade to Windows 11 Pro for a seamless and enhanced user experience. With new features and a revamped interface, Windows 11 Pro takes your device to the next level. </p>
            <p>The Windows 11 Pro Upgrade Key is a digital product that unlocks advanced features, improved security, productivity, and customization options. Elevate your computing experience with Windows 11 Pro and unlock the full potential of Microsoft's latest operating system.</p>
            <h4>Windows 11: Instant Download in Seconds, Genuine Key, Easy Installation from TheKeymind</h4>
            <p>Download Windows 11 from TheKeymind and experience the convenience of instant access to a genuine product key. With an official Windows 11 ISO download link and simple installation instructions, you can quickly and easily set up your new operating system. Secure payment, tracked delivery, and a money-back warranty ensure a worry-free experience. Enjoy the benefits of Windows 11 without delay, courtesy of TheKeymind.</p>
            <h4>Installation of Windows 11 OS with a Digital License</h4>
            <p>Experience a seamless installation process for Windows 11 OS with a digital license from TheKeymind. Our authorized store offers competitive prices and delivers your order digitally. By sending your purchase directly to your inbox, we reduce the environmental impact of physical goods transportation, contributing to a greener world. </p>
            <p>Join us at TheKeymind in our commitment to eco-friendly practices and enjoy a hassle-free and planet-friendly Windows 11 installation.</p>
            <h4>Windows 11 Activation: Perpetual License Explained</h4>
            <p>When you activate Windows 11 with a perpetual license from TheKeymind, your Windows 11 product key is linked to your Microsoft account, not to specific hardware components. This means that if you need to format your PC or make changes to your hardware, you can easily reuse your product key. By reusing the key, the previous license will be deactivated, allowing you to install and activate Windows 11 again without the need to purchase a new key. Enjoy the flexibility and convenience of a perpetual license with TheKeymind.</p>
            <h4>Windows 11 Price at TheKeymind: Why Now is the Right Time to Upgrade</h4>
            <p>Now is the perfect time to upgrade to Windows 11 with exclusive offers from TheKeymind. Benefit from an unbeatable price that won't strain your budget. By purchasing a cost-effective Windows 11 key from TheKeymind, you not only gain access to the exciting features of Windows 11 but also receive dedicated and reliable support. Don't miss out on this opportunity to upgrade your computer and experience the latest technological innovations at a bargain price. Upgrade to Windows 11 at TheKeymind today.</p>
            <h4>What's Included When You Buy a New Windows 11 Product Key</h4>
            <p>When you buy a Windows 11 product key from TheKeymind, you not only enjoy competitive prices but also receive your order directly in your inbox within seconds of purchase. Check your email for the following:</p>
            <ol>
              <li>
              Windows 11 Activation Key (1 user per license)
              </li>
              <li>Official Windows 11 ISO download link.</li>
              <li>Clear and detailed instructions for downloading, installing, and activating Windows 11.</li>
              <li>Free English-speaking Customer Service to assist you</li>
              <li>Invoice for your purchase</li>
            </ol>
            <p>Experience a seamless and convenient process with instant delivery and a comprehensive package when you purchase your Windows 11 product key from TheKeymind.</p>
            <h4>Windows 11 and Microsoft Office: Compatibility with TheKeymind</h4>
            <p>At TheKeymind, you can find Windows 11, which is fully compatible with Office 2021, Office 2019, Office 2016, and Microsoft 365. We also offer other Office suites, including Office 2013, Office 2010, and Office for Mac.</p>
            <p>However, please note that these suites are not compatible with Windows 11. Choose the Microsoft Office version that best suits your needs and enjoy seamless compatibility with your Windows 11 system from TheKeymind.</p>
            <ProductCatalog />
            <p>
              Enjoy your shopping on  
              <Link href="#" class="text-orange" style={{marginLeft:"8px"}}>
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
