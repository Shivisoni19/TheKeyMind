import { collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import SystemRequirements from '../../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";
import { db } from "../../firebase"; // Import your Firebase instance
import { useParams } from "react-router-dom";
import SoftwareInstallSteps from "../../components/Home/SoftwareInstallSteps";
import BestsellerDescription from '../../components/BestsellersGetData/BestsellerDescription'
import BestsellerHeader from '../../components/BestsellersGetData/BestsellerHeader'
import BestsellerDetailsMain from "../../components/BestsellersGetData/BestsellerDetailsMain";

const BestSellersDetails = () => {
  // ------------------
  const [BestsellersDetailsData, setBestsellersDetailsData] = useState({});
  const [loading, setLoading] = useState(true); // Loading state

  const { id } = useParams(); // Import the useParams hook from react-router-dom
  console.log("BestsellersDetailsID", id);

  // useEffect(() => {
  //   fetchBestsellersDetailsData();
  // }, []);
  useEffect(() => {
    const fetchBestsellersDetailsData = async () => {
      try {
        const docRef = doc(db, "bestsellers", id);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setBestsellersDetailsData(snapshot.data());
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchBestsellersDetailsData();
  }, [id]);

  // async function fetchBestsellersDetailsData() {
  //   const docRef = doc(db, "bestsellers", id);
  //   const snapshot = await getDoc(docRef);
  //   console.log("snapshot:", snapshot.data());
  //   setBestsellersDetailsData(snapshot.data());
  // }

  const meta = {
    title: "BestSeller Products",
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
      <BestsellerHeader {...BestsellersDetailsData}/>
      <BestsellerDetailsMain {...BestsellersDetailsData}/>
      <BestsellerDescription {...BestsellersDetailsData}/>
      <SoftwareInstallSteps/>
    </>
  );
};

export default BestSellersDetails;
