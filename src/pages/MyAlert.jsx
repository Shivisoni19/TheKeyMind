import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import NoMail from '../components/MyAccount/MyAlerts/NoMail'
import MailHeading from '../components/MyAccount/MyAlerts/MailHeading'

const MyAlert = () => {
  return (
    <>
      <PersonalHeader/>
      <MailHeading/>
      <NoMail/>
    </>
  )
}

export default MyAlert
