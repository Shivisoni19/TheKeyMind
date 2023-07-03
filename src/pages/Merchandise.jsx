import React from 'react'
import NoMerchandise from '../components/MyAccount/Merchandise/NoMerchandise'
import MerchandiseHeading from '../components/MyAccount/Merchandise/MerchandiseHeading'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'

const Merchandise = () => {
  return (
    <>
      <PersonalHeader/>
      <MerchandiseHeading/>
      <NoMerchandise/>
    </>
  )
}

export default Merchandise
