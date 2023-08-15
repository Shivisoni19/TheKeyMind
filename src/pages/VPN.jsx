import React from 'react'
import VPNProducts from '../components/VPN/VPNProducts'
import VPNHeader from '../components/VPN/VPNHeader'
import VPNTopArea from '../components/VPN/VPNTopArea'
import VPNMain from '../components/VPN/VPNMain'
import { Helmet } from "react-helmet";

const VPN = () => {
  const meta = {
    title: 'VPN | The Keymind',
    description: 'I am a description, and I can create multiple tags',
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
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <VPNHeader/>
      <VPNTopArea/>
      <VPNProducts/>
      <VPNMain/>
    </>
  )
}

export default VPN
