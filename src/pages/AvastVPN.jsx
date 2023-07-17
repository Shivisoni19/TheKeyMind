import React from 'react'
import AvastVPNHeader from '../components/AvastVPN/AvastVPNHeader'
import AvastVPNHeading from '../components/AvastVPN/AvastVPNHeading'
import AvastVPNProducts from '../components/AvastVPN/AvastVPNProducts'
import AvastVPNMain from '../components/AvastVPN/AvastVPNMain'

const AvastVPN = () => {
  return (
    <div>
       <AvastVPNHeader/>
       <AvastVPNHeading/>
       <AvastVPNProducts/>
       <AvastVPNMain/>
    </div>
  )
}

export default AvastVPN
