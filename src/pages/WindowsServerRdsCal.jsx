import React from 'react'
import WindowsServerRdsCalHeader from '../components/WindowsServerRdsCal/WindowsServerRdsCalHeader'
import WindowsServerRdsCalHeading from '../components/WindowsServerRdsCal/WindowsServerRdsCalHeading'
import WindowsServerRdsCalProducts from '../components/WindowsServerRdsCal/WindowsServerRdsCalProducts'
import WindowsServerRdsCalMain from '../components/WindowsServerRdsCal/WindowsServerRdsCalMain'

const WindowsServerRdsCal = () => {
  return (
    <div>
       <WindowsServerRdsCalHeader/>
       <WindowsServerRdsCalHeading/>
       <WindowsServerRdsCalProducts/>
       <WindowsServerRdsCalMain/>
    </div>
  )
}

export default WindowsServerRdsCal
