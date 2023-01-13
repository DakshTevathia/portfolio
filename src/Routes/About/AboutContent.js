import classes from './AboutContent.module.css'
import React from 'react'

const AboutContent = ({ heading, desc,content }) => {
    return (
        <div className={classes.hero_img_projects}>
            <div className={classes.heading}>
                <h1>{heading}</h1>
                {content}
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default AboutContent
