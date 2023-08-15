import React from 'react'
import MicrosoftOfc2016Header from '../components/MicrosoftOfc2016/MicrosoftOfc2016Header'
import MicrosoftOfc2016Heading from '../components/MicrosoftOfc2016/MicrosoftOfc2016Heading'
import MicrosoftOfc2016Products from '../components/MicrosoftOfc2016/MicrosoftOfc2016Products'
import MicrosoftOfc2016Main from '../components/MicrosoftOfc2016/MicrosoftOfc2016Main'
import { Helmet } from 'react-helmet'

const MicrosoftOfc2016 = () => {
  const meta = {
    title: 'Download Microsoft Office 2016 For Windows',
    description: 'Microsoft Office 2016 is a version of the worldwide-famous Microsoft Office suite developed and published by Microsoft in 2016. Get the Microsoft Office 2016 product key',
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
       <MicrosoftOfc2016Header/>
       <MicrosoftOfc2016Heading/>
       <MicrosoftOfc2016Products/>
       <MicrosoftOfc2016Main/>
    </div>
  )
}

export default MicrosoftOfc2016
