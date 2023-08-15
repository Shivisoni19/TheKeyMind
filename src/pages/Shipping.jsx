import React from 'react'
import ShippingMain from '../components/Shipping/ShippingMain'
import ShippingHeader from '../components/Shipping/ShippingHeader'
import ShippingHeading from '../components/Shipping/ShippingHeading'
import { Helmet } from 'react-helmet'

const Shipping = () => {
  const meta = {
    title: 'Shipping',
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
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <ShippingHeader/>
      <ShippingHeading/>
      <ShippingMain/>
    </div>
  )
}

export default Shipping
