import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import MicrosoftOfc2013Description from '../../components/MicrosoftOfc2013GetData/MicrosoftOfc2013Description'
import MicrosoftOfc2013Header from '../../components/MicrosoftOfc2013GetData/MicrosoftOfc2013Header'
import MicrosoftOfc2013DetailsMain from '../../components/MicrosoftOfc2013GetData/MicrosoftOfc2013DetailsMain'

const MicrosoftOfc2013Details = () => {
  // ------------------
  const [office2013productData, setOffice2013ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("Office2013productID", id);

  useEffect(() => {
    fetchOffice2013ProductData();
  }, []);

  async function fetchOffice2013ProductData() {
    const docRef = doc(db, "office2013db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setOffice2013ProductData(snapshot.data());
  }

  const meta = {
    title: "Microsoft Office 2013 Products",
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
      <MicrosoftOfc2013Header {...office2013productData}/>
      <MicrosoftOfc2013DetailsMain {...office2013productData}/>
      <MicrosoftOfc2013Description {...office2013productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default MicrosoftOfc2013Details;
