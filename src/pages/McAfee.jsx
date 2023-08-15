import React from 'react'
import McAfeeHeader from '../components/McAfee/McAfeeHeader'
import McAfeeHeading from '../components/McAfee/McAfeeHeading'
import McAfeeProducts from '../components/McAfee/McAfeeProducts'
import McAfeeMain from '../components/McAfee/McAfeeMain'
import { Helmet } from 'react-helmet'

const McAfee = () => {
  const meta = {
    title: 'McAfee antivirus software download',
    description: 'McAfee Antivirus Software Total Protection for your PC. Click on the Install button. McAfee Antivirus features include virus protection and Stay Safe Online and performance.',
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
       <McAfeeHeader/>
       <McAfeeHeading/>
       <McAfeeProducts/>
       <McAfeeMain/>
    </div>
  )
}

export default McAfee
