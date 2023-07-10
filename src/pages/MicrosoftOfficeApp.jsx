import React from 'react'
import MicrosoftOfficeAppHeader from '../components/MicrosoftOfcApp/MicrosoftOfficeAppHeader'
import MicrosoftOfficeAppHeading from '../components/MicrosoftOfcApp/MicrosoftOfficeAppHeading'
import MicrosoftOfficeAppProducts from '../components/MicrosoftOfcApp/MicrosoftOfficeAppProducts'
import MicrosoftOfficeAppMain from '../components/MicrosoftOfcApp/MicrosoftOfficeAppMain'

const MicrosoftOfficeApp = () => {
  return (
    <div>
       <MicrosoftOfficeAppHeader/>
       <MicrosoftOfficeAppHeading/>
       <MicrosoftOfficeAppProducts/>
       <MicrosoftOfficeAppMain/>
    </div>
  )
}

export default MicrosoftOfficeApp
