import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import VPNforMacDescription from '../../components/VPNforMacGetData/VPNforMacDescription'
import VPNforMacHeader from '../../components/VPNforMacGetData/VPNforMacHeader'
import VPNforMacDetailsMain from '../../components/VPNforMacGetData/VPNforMacDetailsMain'

const VPNforMacDetails = () => {
  // ------------------
  const [VPNforMacproductData, setVPNforMacProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("VPNforMacproductID", id);

  useEffect(() => {
    fetchVPNforMacProductData();
  }, []);

  async function fetchVPNforMacProductData() {
    const docRef = doc(db, "vpnmacdb", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setVPNforMacProductData(snapshot.data());
  }

  const meta = {
    title: "VPN for Mac Products",
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
      <VPNforMacHeader {...VPNforMacproductData}/>
      <VPNforMacDetailsMain {...VPNforMacproductData}/>
      <VPNforMacDescription {...VPNforMacproductData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default VPNforMacDetails;
