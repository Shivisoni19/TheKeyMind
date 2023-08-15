import React from 'react'
import MicrosoftOfc2010Header from '../components/MicrosoftOfc2010/MicrosoftOfc2010Header'
import MicrosoftOfc2010Heading from '../components/MicrosoftOfc2010/MicrosoftOfc2010Heading'
import MicrosoftOfc2010Products from '../components/MicrosoftOfc2010/MicrosoftOfc2010Products'
import MicrosoftOfc2010Main from '../components/MicrosoftOfc2010/MicrosoftOfc2010Main'
import { Helmet } from 'react-helmet'

const MicrosoftOfc2010 = () => {
  const meta = {
    title: 'Microsoft Office 2010 Softeware for PC',
    description: 'Buy a lifetime valid full version & authentic activation license of Microsoft Office 2010. 24/7-Support. Instant Download. 30 Days Guarantee. Satisfaction Guarantee.',
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
       <MicrosoftOfc2010Header/>
       <MicrosoftOfc2010Heading/>
       <MicrosoftOfc2010Products/>
       <MicrosoftOfc2010Main/>
    </div>
  )
}

export default MicrosoftOfc2010
