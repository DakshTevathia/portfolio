import React from 'react'
import HeroComponent from '../Components/HeroBackgroundComponent/HeroComponent'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent colorName='green' />
      <Footer />

    </div>
  )
}

export default About
