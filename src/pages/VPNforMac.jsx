import React from 'react'
import VPNforMacHeader from '../components/VPNforMac/VPNforMacHeader'
import VPNforMacHeading from '../components/VPNforMac/VPNforMacHeading'
import VPNforMacProducts from '../components/VPNforMac/VPNforMacProducts'
import VPNforMacMain from '../components/VPNforMac/VPNforMacMain'
import { Helmet } from 'react-helmet'

const VPNforMac = () => {
  const meta = {
    title: 'Install and activate VPN for Mac - The Keymind',
    description: 'Download your VPN for MAC, A VPN for Mac is a virtual private network service designed to encrypt your internet traffic on your Mac device.',
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
       <VPNforMacHeader/>
       <VPNforMacHeading/>
       <VPNforMacProducts/>
       <VPNforMacMain/>
    </div>
  )
}

export default VPNforMac
