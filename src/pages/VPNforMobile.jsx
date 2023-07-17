import React from 'react'
import VPNforMobileHeader from '../components/VPNforMobile/VPNforMobileHeader'
import VPNforMobileHeading from '../components/VPNforMobile/VPNforMobileHeading'
import VPNforMobileProducts from '../components/VPNforMobile/VPNforMobileProducts'
import VPNforMobileMain from '../components/VPNforMobile/VPNforMobileMain'

const VPNforMobile = () => {
  return (
    <div>
       <VPNforMobileHeader/>
       <VPNforMobileHeading/>
       <VPNforMobileProducts/>
       <VPNforMobileMain/>
    </div>
  )
}

export default VPNforMobile
