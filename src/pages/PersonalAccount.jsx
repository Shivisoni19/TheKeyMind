import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import PersonalInfo from '../components/MyAccount/PersonalAccounInfo/PersonalInfo'
import InfoFooter from '../components/MyAccount/PersonalAccounInfo/InfoFooter'
import AccountButtons from '../components/MyAccount/AccountButtons'
import { Helmet } from 'react-helmet'

const PersonalAccount = () => {
  const meta = {
    title: 'My Profile',
    description: 'I am a description, and I can create multiple tags',
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
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <PersonalHeader/>
      <PersonalInfo/>
      <InfoFooter/>
      <AccountButtons/>
    </>
  )
}

export default PersonalAccount
