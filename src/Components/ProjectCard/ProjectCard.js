import classes from './ProjectCard.module.css'
import React from 'react'

const ProjectCard = ({ projectImage, description, githubLink, name }) => {

    return (
        <div className={classes.singleProjectContainer}>
            <div className={classes.heading}><h2>{name}</h2></div>
            <div className={classes.flexDivImgDesc}>
                <div className={classes.ImageDiv}>
                    <img src={projectImage} alt="Project Pic Here" />
                </div>
                <div className={classes.ContentDiv}>
                    <p>{description}</p>
                    <a href={githubLink} target="_blank" rel="noreferrer">Go to Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
