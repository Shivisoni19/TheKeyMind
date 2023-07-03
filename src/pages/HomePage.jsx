import React from 'react'
import HomeSlider from '../components/Home/HomeSlider'
import ShippingSection from '../components/Home/ShippingSection'
import SoftwareInstallSteps from '../components/Home/SoftwareInstallSteps'
import AllProducts from '../components/Home/AllProducts'
import AboutKeyMind from '../components/Home/AboutKeyMind'

const HomePage = () => {
  return (
    <>
            <HomeSlider/>
            <ShippingSection/>
            <SoftwareInstallSteps/>
            <AllProducts/>
            <AboutKeyMind/>
        
    </>
  )
}

export default HomePage
