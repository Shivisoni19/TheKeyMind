import React from 'react'
import ProductsHeader from '../components/ProductDetails/ProductsHeader'
import ProductDetailsMain from '../components/ProductDetails/ProductDetailsMain';
import ProductDescription from '../components/ProductDetails/ProductDescription';
import SoftwareInstallSteps from '../components/Home/SoftwareInstallSteps';
// import SystemRequirements from '../components/ProductDetails/SystemRequirements';
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const meta = {
    title: 'Product',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'index,follow', // Add the robots meta tag
      googlebot: 'index,follow' // Add the googlebot meta tag
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <ProductsHeader/>
      <ProductDetailsMain/>
      <ProductDescription/>
      <SoftwareInstallSteps/>
    </>
  )
}

export default ProductDetails ;
