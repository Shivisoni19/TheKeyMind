import React from 'react'
import OfficeHeader from '../components/MicrosoftOffice/OfficeHeader'
import OfficeMain from '../components/MicrosoftOffice/OfficeMain';
import OfficeTopArea from '../components/MicrosoftOffice/OfficeTopArea';
import OfficeProduct from '../components/MicrosoftOffice/OfficeProduct';
import { Helmet } from "react-helmet";

const MicrosoftOffice = () => {

  const meta = {
    title: 'Microsoft Office',
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
      <OfficeHeader/>
      <OfficeTopArea/>
      <OfficeProduct/>
      <OfficeMain/>
    </>
  )
}

export default MicrosoftOffice;
