import classes from './ContactContent.module.css'
import React from 'react'

const ProjectsContent = ({ heading, desc }) => {
    return (
        <div className={classes.hero_img_projects}>
            <div className={classes.heading}>
                <h1>{heading}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectsContent
