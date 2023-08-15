import React from 'react'
import MicrosoftOfc2021Header from '../components/MicrosoftOfc2021/MicrosoftOfc2021Header'
import MicrosoftOfc2021Heading from '../components/MicrosoftOfc2021/MicrosoftOfc2021Heading'
import MicrosoftOfc2021Products from '../components/MicrosoftOfc2021/MicrosoftOfc2021Products'
import MicrosoftOfc2021Main from '../components/MicrosoftOfc2021/MicrosoftOfc2021Main'
import { Helmet } from 'react-helmet'

const MicrosoftOfc2021 = () => {
  const meta = {
    title: 'Install and activate Office 2021 for PC',
    description: ' Install and activate Office 2021 for PC Microsoft Office 2021 Product Key Activation. If you have the serial number for Microsoft Office 2021, you can use it to activate it.',
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
       <MicrosoftOfc2021Header/>
       <MicrosoftOfc2021Heading/>
       <MicrosoftOfc2021Products/>
       <MicrosoftOfc2021Main/>
    </div>
  )
}

export default MicrosoftOfc2021
