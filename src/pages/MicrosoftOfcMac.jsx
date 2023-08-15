import React from 'react'
import MicrosoftOfcMacHeader from '../components/MicrosoftOfcMac/MicrosoftOfcMacHeader'
import MicrosoftOfcMacHeading from '../components/MicrosoftOfcMac/MicrosoftOfcMacHeading'
import MicrosoftOfcMacProducts from '../components/MicrosoftOfcMac/MicrosoftOfcMacProducts'
import MicrosoftOfcMacMain from '../components/MicrosoftOfcMac/MicrosoftOfcMacMain'
import { Helmet } from 'react-helmet'

const MicrosoftOfcMac = () => {
  const meta = {
    title: 'Microsoft Office for Mac - Buy Now From The Keymind',
    description: 'Shop High-Quality Microsoft Office Home and Business for Mac Software at the keymind. It’s Lifetime License Key delivered instantly after purchase by email.',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
       <MicrosoftOfcMacHeader/>
       <MicrosoftOfcMacHeading/>
       <MicrosoftOfcMacProducts/>
       <MicrosoftOfcMacMain/>
    </div>
  )
}

export default MicrosoftOfcMac
