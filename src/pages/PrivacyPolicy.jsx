import React from 'react'
import PrivacyMain from '../components/PrivacyPolicy/PrivacyMain'
import PrivacyHeader from '../components/PrivacyPolicy/PrivacyHeader'
import PrivacyHeading from '../components/PrivacyPolicy/PrivacyHeading'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  const meta = {
    title: 'Privacy Policy',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <PrivacyHeader/>
      <PrivacyHeading/>
      <PrivacyMain/>
    </>
  )
}

export default PrivacyPolicy
