import classes from './ContactContent.module.css'
import React from 'react'

const ProjectsContent = () => {
    const submitClicked = () => {
        alert('Please be patient,Yet to give data to an API');
    }
    return (
        <div className={classes.hero_img_content}>
            <form>
                <input type="text" placeholder='Name' title='name'></input>
                <input type="email" placeholder='Email' title='name'></input>
                <input type="text" placeholder='Subject' title='subject'></input>
                <textarea rows='6' placeholder='Message Goes Here'></textarea>
                <button onClick={submitClicked}>Submit</button>
            </form>
        </div>
    )
}

export default ProjectsContent
