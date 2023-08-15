import React from 'react'
import MicrosoftOfc2013Header from '../components/MicrosoftOfc2013/MicrosoftOfc2013Header'
import MicrosoftOfc2013Heading from '../components/MicrosoftOfc2013/MicrosoftOfc2013Heading'
import MicrosoftOfc2013Products from '../components/MicrosoftOfc2013/MicrosoftOfc2013Products'
import MicrosoftOfc2013Main from '../components/MicrosoftOfc2013/MicrosoftOfc2013Main'
import { Helmet } from 'react-helmet'

const MicrosoftOfc2013 = () => {
  const meta = {
    title: 'Microsoft Office 2013 Download for PC Windows (7/10/8)',
    description: 'Microsoft Office 2013 Home and Business pack includes all famous apps, Microsoft Word, Excel, PowerPoint, Outlook, and OneNote. Original MS Office 2013 Pro Plus setup file for 32/64-bit Windows OS!',
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
       <MicrosoftOfc2013Header/>
       <MicrosoftOfc2013Heading/>
       <MicrosoftOfc2013Products/>
       <MicrosoftOfc2013Main/>
    </div>
  )
}

export default MicrosoftOfc2013
