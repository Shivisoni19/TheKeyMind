import React from 'react'
import Microsoft365Header from '../components/Microsoft365/Microsoft365Header'
import Microsoft365Heading from '../components/Microsoft365/Microsoft365Heading'
import Microsoft365Products from '../components/Microsoft365/Microsoft365Products'
import Microsoft365Main from '../components/Microsoft365/Microsoft365Main'
import { Helmet } from 'react-helmet'

const Microsoft365 = () => {
  const meta = {
    title: 'Download Microsoft 365 Software for Windows',
    description: 'Microsoft 365 Software Boost productivity with Microsoft Word, Excel, PowerPoint, Microsoft Teams, and more—all in one place. Like as Personal and family, Business, Enterprise, Education and etc.',
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
       <Microsoft365Header/>
       <Microsoft365Heading/>
       <Microsoft365Products/>
       <Microsoft365Main/>
    </div>
  )
}

export default Microsoft365
