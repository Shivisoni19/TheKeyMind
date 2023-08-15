import React from 'react'
import CookieHeader from '../components/CookiePolicy/CookieHeader'
import CookieMain from '../components/CookiePolicy/CookieMain'
import CookieHeading from '../components/CookiePolicy/CookieHeading'
import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  const meta = {
    title: 'CookiePolicy | The Keymind',
    description: 'I am a description, and I can create multiple tags',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the googlebot meta tag
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
      <CookieHeader/>
      <CookieHeading/>
      <CookieMain/>
    </>
  )
}

export default CookiePolicy
