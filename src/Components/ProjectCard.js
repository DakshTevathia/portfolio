import classes from './ProjectCard.module.css'
import React from 'react'

const ProjectCard = () => {
    return (
        <div className={classes.OutermostDiv}>
            <div className={classes.ImageDiv}>
            </div>
            <div className={classes.ContentDiv}>
                <h2>Name</h2>
                <p>Desc for the Project</p>
                <button>Visit</button>
            </div>
        </div>
    )
}

export default ProjectCard
