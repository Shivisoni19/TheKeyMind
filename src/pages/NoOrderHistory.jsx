import React from 'react'
import NoHistory from '../components/MyAccount/OrderHistory/NoHistory'
import OrderHistoryHeading from '../components/MyAccount/OrderHistory/OrderHistoryHeading';
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader';

const NoOrderHistory = () => {
  return (
    <>
      <PersonalHeader/>
      <OrderHistoryHeading/>
      <NoHistory/>
    </>
  )
}

export default NoOrderHistory
