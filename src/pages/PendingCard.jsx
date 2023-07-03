import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import PendingHeading from '../components/MyAccount/PendingCard/PendingHeading'
import NoPending from '../components/MyAccount/PendingCard/NoPending'


const PendingCard = () => {
  return (
    <div>
      <PersonalHeader/>
      <PendingHeading/>
      <NoPending/>
    </div>
  )
}

export default PendingCard
