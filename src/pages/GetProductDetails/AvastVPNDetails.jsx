import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import AvastVPNDescription from '../../components/AvastVPNGetData/AvastVPNDescription'
import AvastVPNHeader from '../../components/AvastVPNGetData/AvastVPNHeader'
import AvastVPNDetailsMain from '../../components/AvastVPNGetData/AvastVPNDetailsMain'

const AvastVPNDetails = () => {
  // ------------------
  const [AvastVPNproductData, setAvastVPNProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("AvastVPNproductID", id);

  useEffect(() => {
    fetchAvastVPNProductData();
  }, []);

  async function fetchAvastVPNProductData() {
    const docRef = doc(db, "avastvpndb", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setAvastVPNProductData(snapshot.data());
  }

  const meta = {
    title: "Avast VPN Products",
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
      <AvastVPNHeader {...AvastVPNproductData}/>
      <AvastVPNDetailsMain {...AvastVPNproductData}/>
      <AvastVPNDescription {...AvastVPNproductData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default AvastVPNDetails;
