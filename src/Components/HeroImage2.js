import './HeroImage2Styles.css'
import React from 'react'
import image from '../Assets/projects.avif'

const HeroImage2 = ({ heading, desc }) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <h1>{heading}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default HeroImage2
