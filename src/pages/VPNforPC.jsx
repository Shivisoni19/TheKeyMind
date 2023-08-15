import React from 'react'
import VPNforPCHeader from '../components/VPNforPC/VPNforPCHeader'
import VPNforPCHeading from '../components/VPNforPC/VPNforPCHeading'
import VPNforPCProducts from '../components/VPNforPC/VPNforPCProducts'
import VPNforPCMain from '../components/VPNforPC/VPNforPCMain'
import { Helmet } from 'react-helmet'

const VPNforPC = () => {
  const meta = {
    title: 'Purchase one of the best VPNs for PC',
    description: 'Protect your privacy with the best VPNs for PC. Install your PC VPN and protect yourself against any attack or vulnerability.',
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
       <VPNforPCHeader/>
       <VPNforPCHeading/>
       <VPNforPCProducts/>
       <VPNforPCMain/>
    </div>
  )
}

export default VPNforPC
