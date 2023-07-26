import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import Windows8Description from '../../components/Windows8GetData/Windows8Description'
import Windows8Header from '../../components/Windows8GetData/Windows8Header'
import Windows8DetailsMain from '../../components/Windows8GetData/Windows8DetailsMain'

const Windows8Details = () => {
  // ------------------
  const [windows8productData, setWindows8ProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("windows8productID", id);

  useEffect(() => {
    fetchWindows8ProductData();
  }, []);

  async function fetchWindows8ProductData() {
    const docRef = doc(db, "windows8db", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setWindows8ProductData(snapshot.data());
  }

  const meta = {
    title: "Windows 8 Products",
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
      <Windows8Header {...windows8productData}/>
      <Windows8DetailsMain {...windows8productData}/>
      <Windows8Description {...windows8productData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default Windows8Details;
