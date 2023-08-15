import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import VoucherHeading from '../components/MyAccount/Vouchers/VoucherHeading';
import NoVouchers from '../components/MyAccount/Vouchers/NoVouchers';
import { Helmet } from 'react-helmet';

const Vouchers = () => {
  const meta = {
    title: 'My Vouchers',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <PersonalHeader/>
      <VoucherHeading/>
      <NoVouchers/>
    </>
  )
}

export default Vouchers
