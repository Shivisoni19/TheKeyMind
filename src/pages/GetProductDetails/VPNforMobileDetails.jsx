import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import VPNforMobileDescription from '../../components/VPNforMobileGetData/VPNforMobileDescription'
import VPNforMobileHeader from '../../components/VPNforMobileGetData/VPNforMobileHeader'
import VPNforMobileDetailsMain from '../../components/VPNforMobileGetData/VPNforMobileDetailsMain'

const VPNforMobileDetails = () => {
  // ------------------
  const [VPNforMobileproductData, setVPNforMobileProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("VPNforMobileproductID", id);

  useEffect(() => {
    fetchVPNforMobileProductData();
  }, []);

  async function fetchVPNforMobileProductData() {
    const docRef = doc(db, "vpnmobiledb", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setVPNforMobileProductData(snapshot.data());
  }

  const meta = {
    title: "VPN for Mobile Products",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
      robots: "index,follow", // Add the robots meta tag
      googlebot: "index,follow", // Add the googlebot meta tag
    },
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} />
        {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} />
        {/* Add googlebot meta tag */}
      </Helmet>
      <VPNforMobileHeader {...VPNforMobileproductData}/>
      <VPNforMobileDetailsMain {...VPNforMobileproductData}/>
      <VPNforMobileDescription {...VPNforMobileproductData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default VPNforMobileDetails;
