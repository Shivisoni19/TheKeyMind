import React from 'react'
import PersonalHeader from '../components/MyAccount/PersonalAccounInfo/PersonalHeader'
import NoKeys from '../components/MyAccount/Keys/NoKeys'
import KeysHeading from '../components/MyAccount/Keys/KeysHeading'

const Keys = () => {
  return (
    <>
      <PersonalHeader/>
      <KeysHeading/>
      <NoKeys/>
    </>
  )
}

export default Keys
