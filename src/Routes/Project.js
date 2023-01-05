import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import IntroImg from ".././Assets/intro-bg.jpg";

import HeroComponent from '../Components/HeroBackgroundComponent/HeroComponent'
import HeroImage2 from '../Components/HeroImage2';
const Project = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroComponent ImageSrc={IntroImg} Heading="Projects" Desc="Some of my most recent works" /> */}
      <HeroImage2 heading="Projects" desc="Some of my most recent work" />
      <Footer />
    </div>
  )
}

export default Project
