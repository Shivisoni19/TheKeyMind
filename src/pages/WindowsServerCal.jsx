import React from 'react'
import WindowsServerCalHeader from '../components/WindowsServerCal/WindowsServerCalHeader'
import WindowsServerCalHeading from '../components/WindowsServerCal/WindowsServerCalHeading'
import WindowsServerCalProducts from '../components/WindowsServerCal/WindowsServerCalProducts'
import WindowsServerCalMain from '../components/WindowsServerCal/WindowsServerCalMain'

const WindowsServerCal = () => {
  return (
    <div>
       <WindowsServerCalHeader/>
       <WindowsServerCalHeading/>
       <WindowsServerCalProducts/>
       <WindowsServerCalMain/>
    </div>
  )
}

export default WindowsServerCal
