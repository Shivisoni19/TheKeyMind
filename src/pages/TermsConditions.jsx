import React from 'react'
import TermsMain from '../components/TermsConditions/TermsMain'
import TermsHeader from '../components/TermsConditions/TermsHeader'
import TermsMainHeading from '../components/TermsConditions/TermsMainHeading'
import { Helmet } from 'react-helmet'

const TermsConditions = () => {
  const meta = {
    title: 'Terms & Conditions',
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
     <TermsHeader/>
     <TermsMainHeading/>
     <TermsMain/> 
    </>
  )
}

export default TermsConditions 
