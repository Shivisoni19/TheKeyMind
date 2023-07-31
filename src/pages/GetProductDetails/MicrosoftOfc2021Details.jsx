import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import MicrosoftOfc2021Description from '../../components/MicrosoftOfc2021GetData/MicrosoftOfc2021Description'
import MicrosoftOfc2021Header from '../../components/MicrosoftOfc2021GetData/MicrosoftOfc2021Header'
import MicrosoftOfc2021DetailsMain from '../../components/MicrosoftOfc2021GetData/MicrosoftOfc2021DetailsMain'

const MicrosoftOfc2021Details = () => {
  // ------------------
  const [office2021productData, setOffice2021ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("Office2021productID", id);

  useEffect(() => {
    fetchOffice2021ProductData();
  }, []);

  async function fetchOffice2021ProductData() {
    const docRef = doc(db, "office2021db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setOffice2021ProductData(snapshot.data());
  }

  const meta = {
    title: "Windows 7 Products",
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
      <MicrosoftOfc2021Header/>
      <MicrosoftOfc2021DetailsMain/>
      <MicrosoftOfc2021Description/>
      <SoftwareInstallSteps/>
      {/* {...office2021productData} */}
    </>
  );
};

export default MicrosoftOfc2021Details;
