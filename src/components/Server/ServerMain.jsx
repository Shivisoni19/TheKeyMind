import React from "react";
import { Link } from "react-router-dom";
import SoftwareInstallSteps from "../Home/SoftwareInstallSteps";

const ServerMain = () => {
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
              Buy Microsoft Operating Systems from Mr Key Shop at very
              competitive prices. 100% genuine digital licenses, tracked and
              secure payments with a full money-back warranty. Instant digital
              delivery after purchase, with free English-speaking Customer
              Service.
            </h3>
            <h4 class="f-900">Buy Windows Operating Systems</h4>
            <p>
              Mr Key Shop offers the best Microsoft Windows Operating Systems
              for all your needs and at very competitive price points. Order
              your new Windows OS and save, with instant inbox delivery. Mr Key
              Shop’s catalog is complete with the most popular Windows editions.
              If you have an older PC, buy and download
              <Link href="#" class="text-orange">
                Windows 7
              </Link>
              or
              <Link href="#" class="text-orange">
                Windows 8.1
              </Link>
              , both are excellent OSs if your machine is not too up-to-date.
            </p>
            <p>
              Speaking of more modern Microsoft Operating Systems, we also offer
              Windows 10, one of the best Microsoft Products ever, with an
              overhauled UI and advanced features for multi-device operation,
              even for touch screens, like 2-in-1s. Only Windows 10 allows you
              to upgrade to Windows 11 for free! Our catalog also includes this
              new Microsoft Operating System. Purchase Windows 10 OS and save
              twice: you’ll pay way less than the MSRP and you can upgrade to
              Microsoft Windows 11 spending zero! Furthermore, Windows 10 is
              specifically designed to get the most ouf ot Microsoft Office
              2019, one of the best productivity suites from Microsoft.
            </p>
            <p>
              If you need the latest OS, Microsoft Windows 11 is already
              available from Mr Key Shop! Buy your Home or Professional license
              and if you match your order with Microsoft Office 2021, you’ll be
              able to get the most out of both software and save money! Hardware
              optimization, security and collaboration, as well as co-authoring
              and native Android app support (with a later update) are just some
              reasons to go and buy Windows 11 from Mr Key Shop! We always
              recommend protecting your devices by also installing a valid and
              effective Antivirus against cyber attacks
            </p>
            <h4>Download Windows Operating Systems</h4>
            <p>
              Buy and download Windows Operating Systems from Mr Key Shop: this
              is how you will save on the price list, and, above all, receive
              your 100% genuine and guaranteed product key within a few seconds
              from your purchase, with an official ISO download link and full
              instructions on how to install Windows quickly and easily. Mr Key
              Shop only offers secure and tracked payment methods, with a full
              money-back warranty: at the end of your transaction, you’ll
              receive everything you need in your inbox. You’ll be able to
              download and install Windows with no external help. Enjoy your new
              OS in a breeze!
            </p>
            <h4>Install Windows operating systems with digital licenses</h4>
            <p>
              With Digital Delivery we can offer our professional service,
              together with cheap prices from our 100% authorized store. We can
              also help save the environment: by sending your order to your
              inbox, we can reduce the impact of physical good transport
              systems, lowering the related emissions and waste. Together, we
              can make the world greener because we are an Eco-Friendly Company!
            </p>
            <h4>
              The licenses for Windows Operating Systems are perpetual. What
              does it mean?
            </h4>
            <p>
              Mr Key Shop’s catalog only includes perpetual licenses for Windows
              Operating Systems. Such licenses are bound to a Microsoft Account
              and not a given machine. Whenever you need to format your PC or
              replace something in your hardware, just reuse your product key.
              You’ll deactivate the previous license and will be able to reuse
              it to install your Windows OS again without buying a new product
              key.
            </p>
            <h4>When I buy a new Windows Operating System, what will I get?</h4>
            <p>
              Buy Microsoft Windows from Mr Key Shop and you’ll save on the
              price list and, most importantly, you’ll receive your order in
              your inbox within a few seconds from purchase. Check your email,
              we’ll send you the following:
            </p>
            <ol>
              <li>Your Windows Operating System (1 user license)</li>
              <li>Official Windows ISO download link</li>
              <li>Your Windows Operating System (1 user license)</li>
              <li>Official Windows ISO download link</li>
            </ol>
            <p>
              Enjoy your shopping on
              <Link href="#" class="text-orange">
                mrkeyshop.com
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

export default ServerMain;
