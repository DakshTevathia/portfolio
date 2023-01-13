import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import ProjectsContent from '../Projects/ProjectsContent';
const Project = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroComponent ImageSrc={IntroImg} Heading="Projects" Desc="Some of my most recent works" /> */}
      <ProjectsContent heading="Projects" desc="Some of my most recent work" />
      <Footer />
    </div>
  )
}

export default Project
