import React from 'react'
import WindowsServerHeader from '../components/WindowsServer/WindowsServerHeader'
import WindowsServerHeading from '../components/WindowsServer/WindowsServerHeading'
import WindowsServerProducts from '../components/WindowsServer/WindowsServerProducts'
import WindowsServerMain from '../components/WindowsServer/WindowsServerMain'

const WindowsServer = () => {
  return (
    <div>
       <WindowsServerHeader/>
       <WindowsServerHeading/>
       <WindowsServerProducts/>
       <WindowsServerMain/>
    </div>
  )
}

export default WindowsServer
