import React from 'react'
import SystemHeader from '../components/OperatingSystem/SystemHeader'
import SystemTopArea from '../components/OperatingSystem/SystemTopArea'
import SystemMain from '../components/OperatingSystem/SystemMain'
import SystemProducts from '../components/OperatingSystem/SystemProducts'

const OperatingSystem = () => {
  return (
    <div>
      <SystemHeader/>
      <SystemTopArea/>
      <SystemProducts/>
      <SystemMain/>
    </div>
  )
}

export default OperatingSystem
