import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import NoCart from '../components/MyAccount/MyCart/NoCart'
import CartHeading from '../components/MyAccount/MyCart/CartHeading'

const MyCart = () => {
  return (
    <>
      <PersonalHeader/>
      <CartHeading/>
      <NoCart/>
    </>
  )
}

export default MyCart
