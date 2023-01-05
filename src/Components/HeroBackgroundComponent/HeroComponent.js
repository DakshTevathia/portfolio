import React from 'react'
import ProjectCard from '../ProjectCard'
import classes from './HeroComponent.module.css'



const HeroComponent = ({ ImageSrc, Heading, Desc }) => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={ImageSrc} alt="Intro Image Here"></img>
            </div>
            <div className='content'>
                <div>
                    <div className={classes.data}>
                        <div>
                            <h2 className={classes.centerHeading}>{Heading}</h2>
                            <p className={classes.centerDesc}>{Desc}</p>
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        flexDirection: "column"
                    }}>
                        <ProjectCard />

                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

export default HeroComponent
