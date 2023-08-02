import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import MicrosoftOfc2016Description from '../../components/MicrosoftOfc2016GetData/MicrosoftOfc2016Description'
import MicrosoftOfc2016Header from '../../components/MicrosoftOfc2016GetData/MicrosoftOfc2016Header'
import MicrosoftOfc2016DetailsMain from '../../components/MicrosoftOfc2016GetData/MicrosoftOfc2016DetailsMain'

const MicrosoftOfc2016Details = () => {
  // ------------------
  const [office2016productData, setOffice2016ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("Office2016productID", id);

  useEffect(() => {
    fetchOffice2016ProductData();
  }, []);

  async function fetchOffice2016ProductData() {
    const docRef = doc(db, "office2016db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setOffice2016ProductData(snapshot.data());
  }

  const meta = {
    title: "Microsoft Office 2016 Products",
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
      <MicrosoftOfc2016Header {...office2016productData}/>
      <MicrosoftOfc2016DetailsMain {...office2016productData}/>
      <MicrosoftOfc2016Description {...office2016productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default MicrosoftOfc2016Details;
