import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import MicrosoftOfc365Description from '../../components/MicrosoftOfc365GetData/MicrosoftOfc365Description'
import MicrosoftOfc365Header from '../../components/MicrosoftOfc365GetData/MicrosoftOfc365Header'
import MicrosoftOfc365DetailsMain from '../../components/MicrosoftOfc365GetData/MicrosoftOfc365DetailsMain'

const MicrosoftOfc365Details = () => {
  // ------------------
  const [office365productData, setOffice365ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("Office365productID", id);

  useEffect(() => {
    fetchOffice365ProductData();
  }, []);

  async function fetchOffice365ProductData() {
    const docRef = doc(db, "office365db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setOffice365ProductData(snapshot.data());
  }

  const meta = {
    title: "Microsoft Office 365 Products",
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
      <MicrosoftOfc365Header {...office365productData}/>
      <MicrosoftOfc365DetailsMain {...office365productData}/>
      <MicrosoftOfc365Description {...office365productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default MicrosoftOfc365Details;
