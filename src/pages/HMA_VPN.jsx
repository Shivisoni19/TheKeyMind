import React from 'react'
import HMA_VPNHeader from '../components/HMA-VPN/HMA_VPNHeader'
import HMA_VPNHeading from '../components/HMA-VPN/HMA_VPNHeading'
import HMA_VPNProducts from '../components/HMA-VPN/HMA_VPNProducts'
import HMA_VPNMain from '../components/HMA-VPN/HMA_VPNMain'
import { Helmet } from 'react-helmet'

const HMA_VPN = () => {
  const meta = {
    title: 'HMA VPN Download for Your Devices',
    description: 'HideMyAss (HMA) VPN software latest version online installer for Windows PC. It will hide your IP address location by choosing a server',
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
       <HMA_VPNHeader/>
       <HMA_VPNHeading/>
       <HMA_VPNProducts/>
       <HMA_VPNMain/>
    </div>
  )
}

export default HMA_VPN
