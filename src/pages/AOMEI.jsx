import React from 'react'
import AOMEIHeader from '../components/AOMEI/AOMEIHeader'
import AOMEIHeading from '../components/AOMEI/AOMEIHeading'
import AOMEIProducts from '../components/AOMEI/AOMEIProducts'
import AOMEIMain from '../components/AOMEI/AOMEIMain'
import { Helmet } from "react-helmet";

const AOMEI = () => {
  const meta = {
    title: 'Download AOMEI latest Version 2023 from the keymind',
    description: 'AOMEI Backupper Standard Review & download. Download (32-bit/64-bit) Latest Version 2023, lets you back up & restore your data',
    // canonical: 'http://example.com/path/to/page',
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
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <AOMEIHeader/>
      <AOMEIHeading/>
      <AOMEIProducts/>
      <AOMEIMain/>
    </>
  )
}

export default AOMEI
