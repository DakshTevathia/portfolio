import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import AboutContent from './AboutContent'
import Project from '../Projects/Project'

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
