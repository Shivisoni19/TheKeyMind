import React from 'react'
import AntivirusProducts from '../components/Antivirus/AntivirusProducts'
import AntivirusHeader from '../components/Antivirus/AntivirusHeader'
import AntivirusTopArea from '../components/Antivirus/AntivirusTopArea'
import AntivirusMain from '../components/Antivirus/AntivirusMain'
import { Helmet } from "react-helmet";



const Antivirus = () => {

  const meta = {
    title: 'Antivirus',
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
      <AntivirusHeader/>
      <AntivirusTopArea/>
      <AntivirusProducts/>
      <AntivirusMain/>
    </>
  )
}

export default Antivirus
