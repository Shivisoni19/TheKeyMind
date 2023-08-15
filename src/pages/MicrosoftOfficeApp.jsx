import React from 'react'
import MicrosoftOfficeAppHeader from '../components/MicrosoftOfcApp/MicrosoftOfficeAppHeader'
import MicrosoftOfficeAppHeading from '../components/MicrosoftOfcApp/MicrosoftOfficeAppHeading'
import MicrosoftOfficeAppProducts from '../components/MicrosoftOfcApp/MicrosoftOfficeAppProducts'
import MicrosoftOfficeAppMain from '../components/MicrosoftOfcApp/MicrosoftOfficeAppMain'
import { Helmet } from 'react-helmet'

const MicrosoftOfficeApp = () => {
  const meta = {
    title: 'Download Microsoft Office App',
    description: 'The latest version of Microsoft Office App for home users is Office Home & Student or business. It includes Word, Excel, PowerPoint, Outlook, OneNote and OneDrive.',
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
       <MicrosoftOfficeAppHeader/>
       <MicrosoftOfficeAppHeading/>
       <MicrosoftOfficeAppProducts/>
       <MicrosoftOfficeAppMain/>
    </div>
  )
}

export default MicrosoftOfficeApp
