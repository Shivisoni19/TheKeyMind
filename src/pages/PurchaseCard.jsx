import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import PurchaseHeading from '../components/MyAccount/PurchaseCard/PurchaseHeading'
import NoPurchase from '../components/MyAccount/PurchaseCard/NoPurchase'


const PurchaseCard = () => {
  return (
    <div>
      <PersonalHeader/>
      <PurchaseHeading/>
      <NoPurchase/>
    </div>
  )
}

export default PurchaseCard
