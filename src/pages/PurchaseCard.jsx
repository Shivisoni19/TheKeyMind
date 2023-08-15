import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import PurchaseHeading from '../components/MyAccount/PurchaseCard/PurchaseHeading'
import NoPurchase from '../components/MyAccount/PurchaseCard/NoPurchase'
import { Helmet } from 'react-helmet'


const PurchaseCard = () => {
  const meta = {
    title: 'Purchase Card',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <PersonalHeader/>
      <PurchaseHeading/>
      <NoPurchase/>
    </div>
  )
}

export default PurchaseCard
