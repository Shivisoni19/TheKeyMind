import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import VoucherHeading from '../components/MyAccount/Vouchers/VoucherHeading';
import NoVouchers from '../components/MyAccount/Vouchers/NoVouchers';

const Vouchers = () => {
  return (
    <>
      <PersonalHeader/>
      <VoucherHeading/>
      <NoVouchers/>
    </>
  )
}

export default Vouchers
