import React from 'react'
import KasperskyHeader from '../components/Kaspersky/KasperskyHeader'
import KasperskyHeading from '../components/Kaspersky/KasperskyHeading'
import KasperskyProducts from '../components/Kaspersky/KasperskyProducts'
import KasperskyMain from '../components/Kaspersky/KasperskyMain'

const Kaspersky = () => {
  return (
    <div>
       <KasperskyHeader/>
       <KasperskyHeading/>
       <KasperskyProducts/>
       <KasperskyMain/>
    </div>
  )
}

export default Kaspersky
