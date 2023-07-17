import React from 'react'
import HMA_VPNHeader from '../components/HMA-VPN/HMA_VPNHeader'
import HMA_VPNHeading from '../components/HMA-VPN/HMA_VPNHeading'
import HMA_VPNProducts from '../components/HMA-VPN/HMA_VPNProducts'
import HMA_VPNMain from '../components/HMA-VPN/HMA_VPNMain'

const HMA_VPN = () => {
  return (
    <div>
       <HMA_VPNHeader/>
       <HMA_VPNHeading/>
       <HMA_VPNProducts/>
       <HMA_VPNMain/>
    </div>
  )
}

export default HMA_VPN
