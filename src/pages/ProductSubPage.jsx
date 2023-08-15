import React from "react";
import PageMain from "../components/SubPage/PageMain";
import PageHeader from "../components/SubPage/PageHeader";
import PageHeading from "../components/SubPage/PageHeading";
import PageProducts from "../components/SubPage/PageProducts";
import { Helmet } from "react-helmet";

const ProductSubPage = () => {
  const meta = {
    title: 'Product SubPage',
    description: 'I am a description, and I can create multiple tags',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the google bot meta tag
    }
  };
  return (
    <>
     <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <PageHeader />
      <PageHeading />
      <PageProducts />
      <PageMain />
    </>
  );
};

export default ProductSubPage;
