import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AboutContent from './AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutContent heading='About' desc='this is about content' > </AboutContent>
      <Footer />
    </div >
  )
}

export default About
