import React from 'react'
import MicrosoftSQLServerHeader from '../components/MicrosoftSQLServer/MicrosoftSQLServerHeader'
import MicrosoftSQLServerHeading from '../components/MicrosoftSQLServer/MicrosoftSQLServerHeading'
import MicrosoftSQLServerProducts from '../components/MicrosoftSQLServer/MicrosoftSQLServerProducts'
import MicrosoftSQLServerMain from '../components/MicrosoftSQLServer/MicrosoftSQLServerMain'

const MicrosoftSQLServer = () => {
  return (
    <div>
       <MicrosoftSQLServerHeader/>
       <MicrosoftSQLServerHeading/>
       <MicrosoftSQLServerProducts/>
       <MicrosoftSQLServerMain/>
    </div>
  )
}

export default MicrosoftSQLServer
