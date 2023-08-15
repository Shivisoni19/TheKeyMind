import React from 'react'
import Win10Header from '../components/Windows10/Win10Header'
import Win10Heading from '../components/Windows10/Win10Heading'
import Win10Products from '../components/Windows10/Win10Products'
import Win10Main from '../components/Windows10/Win10Main'
import { Helmet } from 'react-helmet'

const Windows10 = () => {
  const meta = {
    title: ' Activate Windows 10 with a digital license The Keymind catalog only has Windows 10 activation keys for licenses.',
    description: 'Get the product keys needed for setup and activation of Windows 10 and other Windows products from a the keymind.',
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
       <Win10Header/>
       <Win10Heading/>
       <Win10Products/>
       <Win10Main/>
    </div>
  )
}

export default Windows10
