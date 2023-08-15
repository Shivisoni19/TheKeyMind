import React from 'react'
import AvastVPNHeader from '../components/AvastVPN/AvastVPNHeader'
import AvastVPNHeading from '../components/AvastVPN/AvastVPNHeading'
import AvastVPNProducts from '../components/AvastVPN/AvastVPNProducts'
import AvastVPNMain from '../components/AvastVPN/AvastVPNMain'
import { Helmet } from "react-helmet";

const AvastVPN = () => {
  const meta = {
    title: 'Avast VPN Download with Latest Version',
    description: 'Download Avast VPN for Windows PC. Avast VPN offers standard market features such as protect your privacy, and enjoy safe web browsing.',
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
       <AvastVPNHeader/>
       <AvastVPNHeading/>
       <AvastVPNProducts/>
       <AvastVPNMain/>
    </div>
  )
}

export default AvastVPN
