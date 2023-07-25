import React from 'react'
import VPNProducts from '../components/VPN/VPNProducts'
import VPNHeader from '../components/VPN/VPNHeader'
import VPNTopArea from '../components/VPN/VPNTopArea'
import VPNMain from '../components/VPN/VPNMain'
import { Helmet } from "react-helmet";

const VPN = () => {
  const meta = {
    title: 'VPN',
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
      <VPNHeader/>
      <VPNTopArea/>
      <VPNProducts/>
      <VPNMain/>
    </>
  )
}

export default VPN
