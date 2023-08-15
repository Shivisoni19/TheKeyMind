import React from 'react'
import MicrosoftOfc2019Header from '../components/MicrosoftOfc2019/MicrosoftOfc2019Header'
import MicrosoftOfc2019Heading from '../components/MicrosoftOfc2019/MicrosoftOfc2019Heading'
import MicrosoftOfc2019Products from '../components/MicrosoftOfc2019/MicrosoftOfc2019Products'
import MicrosoftOfc2019Main from '../components/MicrosoftOfc2019/MicrosoftOfc2019Main'
import { Helmet } from 'react-helmet'

const MicrosoftOfc2019 = () => {
  const meta = {
    title: 'Microsoft office 2019 product key activation',
    description: 'Get your Microsoft Workplace Discount Program product key to activate Microsoft 2019. Install with Microsoft office 2019 product key',
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
       <MicrosoftOfc2019Header/>
       <MicrosoftOfc2019Heading/>
       <MicrosoftOfc2019Products/>
       <MicrosoftOfc2019Main/>
    </div>
  )
}

export default MicrosoftOfc2019
