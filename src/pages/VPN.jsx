import React from 'react'
import VPNProducts from '../components/VPN/VPNProducts'
import VPNHeader from '../components/VPN/VPNHeader'
import VPNTopArea from '../components/VPN/VPNTopArea'
import VPNMain from '../components/VPN/VPNMain'

const VPN = () => {
  return (
    <>
      <VPNHeader/>
      <VPNTopArea/>
      <VPNProducts/>
      <VPNMain/>
    </>
  )
}

export default VPN
