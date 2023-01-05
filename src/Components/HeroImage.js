import React from 'react'
import './HeroImageStyles.css'
import IntoImg from "../Assets/intro-bg.jpg";
import { Link } from 'react-router-dom';
const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntoImg} alt="Intro Image Here"></img>
            </div>
            <div className='content'>
                <p>Hi, I am a </p>
                <h1> React Developer</h1>
                <div>
                    <Link to="/project" className='btn'>Resume</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>

        </div>
    )
}
export default HeroImage
