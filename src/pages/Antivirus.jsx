import React from 'react'
import AntivirusProducts from '../components/Antivirus/AntivirusProducts'
import AntivirusHeader from '../components/Antivirus/AntivirusHeader'
import AntivirusTopArea from '../components/Antivirus/AntivirusTopArea'
import AntivirusMain from '../components/Antivirus/AntivirusMain'

const Antivirus = () => {
  return (
    <>
      <AntivirusHeader/>
      <AntivirusTopArea/>
      <AntivirusProducts/>
      <AntivirusMain/>
    </>
  )
}

export default Antivirus
