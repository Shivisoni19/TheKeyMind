import React from 'react'
import MicrosoftSQLServerHeader from '../components/MicrosoftSQLServer/MicrosoftSQLServerHeader'
import MicrosoftSQLServerHeading from '../components/MicrosoftSQLServer/MicrosoftSQLServerHeading'
import MicrosoftSQLServerProducts from '../components/MicrosoftSQLServer/MicrosoftSQLServerProducts'
import MicrosoftSQLServerMain from '../components/MicrosoftSQLServer/MicrosoftSQLServerMain'
import { Helmet } from 'react-helmet'

const MicrosoftSQLServer = () => {
  const meta = {
    title: 'Microsoft SQL Server | Download Microsoft SQL Server',
    description: 'You need to manage a relational database in different formats The Keymind offers the best versions of Microsoft SQL Server at competitive prices! ',
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
       <MicrosoftSQLServerHeader/>
       <MicrosoftSQLServerHeading/>
       <MicrosoftSQLServerProducts/>
       <MicrosoftSQLServerMain/>
    </div>
  )
}

export default MicrosoftSQLServer
