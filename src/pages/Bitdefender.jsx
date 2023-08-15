import React from 'react'
import BitdefenderHeader from '../components/Bitdefender/BitdefenderHeader'
import BitdefenderHeading from '../components/Bitdefender/BitdefenderHeading'
import BitdefenderProducts from '../components/Bitdefender/BitdefenderProducts'
import BitdefenderMain from '../components/Bitdefender/BitdefenderMain'
import { Helmet } from "react-helmet";

const Bitdefender = () => {
  const meta = {
    title: ' Bitdefender Antivirus Software | Bitdefender Latest Version',
    description: 'et The Best Cybersecurity For Your Devices With Our Bitdefender Product Of The Year!',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the googlebot meta tag
    }
  };
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
       <BitdefenderHeader/>
       <BitdefenderHeading/>
       <BitdefenderProducts/>
       <BitdefenderMain/>
    </div>
  )
}

export default Bitdefender
