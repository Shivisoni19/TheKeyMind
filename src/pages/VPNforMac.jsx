import React from 'react'
import VPNforMacHeader from '../components/VPNforMac/VPNforMacHeader'
import VPNforMacHeading from '../components/VPNforMac/VPNforMacHeading'
import VPNforMacProducts from '../components/VPNforMac/VPNforMacProducts'
import VPNforMacMain from '../components/VPNforMac/VPNforMacMain'

const VPNforMac = () => {
  return (
    <div>
       <VPNforMacHeader/>
       <VPNforMacHeading/>
       <VPNforMacProducts/>
       <VPNforMacMain/>
    </div>
  )
}

export default VPNforMac
