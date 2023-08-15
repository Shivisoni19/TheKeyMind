import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import NoMail from '../components/MyAccount/MyAlerts/NoMail'
import MailHeading from '../components/MyAccount/MyAlerts/MailHeading'
import { Helmet } from 'react-helmet'

const MyAlert = () => {
  const meta = {
    title: 'My Alert | The Keymind',
    description: 'I am a description, and I can create multiple tags',
    // canonical: 'http://example.com/path/to/page',
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
    <>
    <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <PersonalHeader/>
      <MailHeading/>
      <NoMail/>
    </>
  )
}

export default MyAlert
