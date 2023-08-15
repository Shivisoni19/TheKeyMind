import React from 'react'
import Win8Header from '../components/Windows8/Win8Header'
import Win8Heading from '../components/Windows8/Win8Heading'
import Win8Products from '../components/Windows8/Win8Products'
import Win8Main from '../components/Windows8/Win8Main'
import { Helmet } from 'react-helmet'

const Windows8 = () => {
  const meta = {
    title: 'Activate Windows 8 product key - The Keymind',
    description: 'Congratulations! You have purchased Windows 8 at the best price and now all you have to do is download, install and activate your license.',
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
       <Win8Header/>
       <Win8Heading/>
       <Win8Products/>
       <Win8Main/>
    </div>
  )
}

export default Windows8
