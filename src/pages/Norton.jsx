import React from 'react'
import NortonHeader from '../components/Norton/NortonHeader'
import NortonHeading from '../components/Norton/NortonHeading'
import NortonProducts from '../components/Norton/NortonProducts'
import NortonMain from '../components/Norton/NortonMain'
import { Helmet } from 'react-helmet'

const Norton = () => {
  const meta = {
    title: 'Norton Antivirus Product Key 2023 and Activation Code | The Keymind',
    description: 'Install Norton with a product key? A Complete Guide About Norton Antivirus Product Key Free Download.',
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
       <NortonHeader/>
       <NortonHeading/>
       <NortonProducts/>
       <NortonMain/>
    </div>
  )
}

export default Norton
