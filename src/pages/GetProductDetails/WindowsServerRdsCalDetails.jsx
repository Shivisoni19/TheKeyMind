import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import WindowsServerRdsCalDescription from '../../components/WindowsServerRdsCalGetData/WindowsServerRdsCalDescription'
import WindowsServerRdsCalHeader from '../../components/WindowsServerRdsCalGetData/WindowsServerRdsCalHeader'
import WindowsServerRdsCalDetailsMain from '../../components/WindowsServerRdsCalGetData/WindowsServerRdsCalDetailsMain'

const WindowsServerRdsCalDetails = () => {
  // ------------------
  const [WindowsServerRdsCalproductData, setWindowsServerRdsCalProductData] = useState({});
  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("WindowsServerRdsCalproductID", id);

  useEffect(() => {
    fetchWindowsServerRdsCalProductData();
  }, []);

  async function fetchWindowsServerRdsCalProductData() {
    const docRef = doc(db, "windowsserverrdscaldb", id);
    const snapshot = await getDoc(docRef);
    console.log("snapshot:", snapshot.data());
    setWindowsServerRdsCalProductData(snapshot.data());
  }

  const meta = {
    title: "Windows Server Rds Cal Products",
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
      <WindowsServerRdsCalHeader {...WindowsServerRdsCalproductData}/>
      <WindowsServerRdsCalDetailsMain {...WindowsServerRdsCalproductData}/>
      <WindowsServerRdsCalDescription {...WindowsServerRdsCalproductData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default WindowsServerRdsCalDetails;
