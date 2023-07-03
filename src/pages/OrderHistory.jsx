import React from 'react'
import OrderHistoryHeading from '../components/MyAccount/OrderHistory/OrderHistoryHeading';
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader';
import OrderHistoryList from '../components/MyAccount/OrderHistory/OrderHistoryList';
// import NoHistory from '../components/MyAccount/OrderHistory/NoHistory';


const OrderHistory = () => {
  return (
    <>
      <PersonalHeader/>
      <OrderHistoryHeading/>
      <OrderHistoryList/>
      {/* <NoHistory/> */}
    </>
  )
}

export default OrderHistory
