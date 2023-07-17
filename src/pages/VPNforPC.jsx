import React from 'react'
import VPNforPCHeader from '../components/VPNforPC/VPNforPCHeader'
import VPNforPCHeading from '../components/VPNforPC/VPNforPCHeading'
import VPNforPCProducts from '../components/VPNforPC/VPNforPCProducts'
import VPNforPCMain from '../components/VPNforPC/VPNforPCMain'

const VPNforPC = () => {
  return (
    <div>
       <VPNforPCHeader/>
       <VPNforPCHeading/>
       <VPNforPCProducts/>
       <VPNforPCMain/>
    </div>
  )
}

export default VPNforPC
