import React from 'react'
import NoHistory from '../components/MyAccount/OrderHistory/NoHistory'
import OrderHistoryHeading from '../components/MyAccount/OrderHistory/OrderHistoryHeading';
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader';
import { Helmet } from 'react-helmet';

const NoOrderHistory = () => {
  const meta = {
    title: 'Order History',
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
      <OrderHistoryHeading/>
      <NoHistory/>
    </>
  )
}

export default NoOrderHistory
