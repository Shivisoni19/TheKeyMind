import React from 'react'
import OrderHistoryHeading from '../components/MyAccount/OrderHistory/OrderHistoryHeading';
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader';
import OrderHistoryList from '../components/MyAccount/OrderHistory/OrderHistoryList';
import { Helmet } from 'react-helmet';
// import NoHistory from '../components/MyAccount/OrderHistory/NoHistory';


const OrderHistory = () => {
  const meta = {
    title: 'Order History | The Keymind',
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
      <OrderHistoryHeading/>
      <OrderHistoryList/>
      {/* <NoHistory/> */}
    </>
  )
}

export default OrderHistory
