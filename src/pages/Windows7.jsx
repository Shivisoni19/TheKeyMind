import React from 'react'
import Win7Header from '../components/Windows7/Win7Header'
import Win7Heading from '../components/Windows7/Win7Heading'
import Win7Products from '../components/Windows7/Win7Products'
import Win7Main from '../components/Windows7/Win7Main'
import { Helmet } from 'react-helmet'

const Windows7 = () => {
  const meta = {
    title: 'Windows 7 Activation Key | Download Windows 11 from the keymind',
    description: 'Windows 7 is available from the keymind at a Best price. 100% genuine digital license, secure payments, and a full money-back warranty.',
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
       <Win7Header/>
       <Win7Heading/>
       <Win7Products/>
       <Win7Main/>
    </div>
  )
}

export default Windows7
