import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import PersonalInfo from '../components/MyAccount/PersonalAccounInfo/PersonalInfo'
import InfoFooter from '../components/MyAccount/PersonalAccounInfo/InfoFooter'
import AccountButtons from '../components/MyAccount/AccountButtons'

const PersonalAccount = () => {
  return (
    <>
      <PersonalHeader/>
      <PersonalInfo/>
      <InfoFooter/>
      <AccountButtons/>
    </>
  )
}

export default PersonalAccount
