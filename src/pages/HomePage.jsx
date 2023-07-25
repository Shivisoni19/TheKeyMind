import React from 'react'
import HomeSlider from '../components/Home/HomeSlider'
import ShippingSection from '../components/Home/ShippingSection'
import SoftwareInstallSteps from '../components/Home/SoftwareInstallSteps'
import AboutKeyMind from '../components/Home/AboutKeyMind'
import { Helmet } from "react-helmet";
import BestsellerProducts from '../components/Home/BestsellerProducts'

const meta = {
  title: 'The Key Mind',
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

const HomePage = () => {
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
     
      <HomeSlider/>
      <ShippingSection/>
      <SoftwareInstallSteps/>
      <BestsellerProducts/>
      <AboutKeyMind/>
        
    </>
  )
}

export default HomePage
