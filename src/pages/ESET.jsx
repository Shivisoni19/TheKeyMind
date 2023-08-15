import React from 'react'
import ESETHeader from '../components/ESET/ESETHeader'
import ESETHeading from '../components/ESET/ESETHeading'
import ESETProducts from '../components/ESET/ESETProducts'
import ESETMain from '../components/ESET/ESETMain'
import { Helmet } from 'react-helmet'

const ESET = () => {
  const meta = {
    title: 'ESET Antivirus for Windows and macOS devices',
    description: 'ESET Antivirus security solutions for your home and business devices. Try ESET antivirus and internet security solutions for Stay Safe Online & Protect Your Devices.',
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
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
       <ESETHeader/>
       <ESETHeading/>
       <ESETProducts/>
       <ESETMain/>
    </div>
  )
}

export default ESET
