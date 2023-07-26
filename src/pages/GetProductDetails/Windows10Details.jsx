import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import Windows10Description from '../../components/Windows10GetData/Windows10Description'
import Windows10Header from '../../components/Windows10GetData/Windows10Header'
import Windows10DetailsMain from '../../components/Windows10GetData/Windows10DetailsMain'

const Windows10Details = () => {
  // ------------------
  const [windows10productData, setWindows10ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("windows10productID", id);

  useEffect(() => {
    fetchWindows10ProductData();
  }, []);

  async function fetchWindows10ProductData() {
    const docRef = doc(db, "windows10db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setWindows10ProductData(snapshot.data());
  }

  const meta = {
    title: "Windows 10 Products",
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
      <Windows10Header {...windows10productData}/>
      <Windows10DetailsMain {...windows10productData}/>
      <Windows10Description {...windows10productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default Windows10Details;
