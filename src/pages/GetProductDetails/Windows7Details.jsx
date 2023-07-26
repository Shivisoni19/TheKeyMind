import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import Windows7Description from '../../components/Windows7GetData/Windows7Description'
import Windows7Header from '../../components/Windows7GetData/Windows7Header'
import Windows7DetailsMain from '../../components/Windows7GetData/Windows7DetailsMain'

const Windows7Details = () => {
  // ------------------
  const [windows7productData, setWindows7ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("windows7productID", id);

  useEffect(() => {
    fetchWindows7ProductData();
  }, []);

  async function fetchWindows7ProductData() {
    const docRef = doc(db, "windows7db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setWindows7ProductData(snapshot.data());
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
      <Windows7Header {...windows7productData}/>
      <Windows7DetailsMain {...windows7productData}/>
      <Windows7Description {...windows7productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default Windows7Details;
