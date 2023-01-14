import classes from './ProjectsContent.module.css'
import React from 'react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import rickMortyProjectImage from '../../Assets/R&M_img.png';
import fitnessAppProjectImage from '../../Assets/fitness_img.png'

const ProjectsContent = () => {
    return (
        <div className={classes.hero_img_projects}>
            <div className={classes.projectsContainer}>
                <ProjectCard name='Rick and Morty Wiki  ' description="Implemented my knowledge in ReactJS to make this Rick and Morty(One of my fav. shows) wikipedia that lets you browse through various characters. You can view characters on basis of their location and episode in other tabs and add specific filters to them using the accordian.More over you can view details of any character by simply clicking on it.Used the official Rick and Morty API to fetch necessary data. The design looks rather bold and amateur as it was developed on the fly while writing the code and for simplicity's sake I used bootstrap where ever seemed necessary. The website is responsive."
                    githubLink='https://github.com/DakshTevathia/RickAndMorty.git' projectImage={rickMortyProjectImage} />
                <ProjectCard name='Fitness App' description="This is also another React Project. I utilized 3 API's for this one. This website is responsive for various screen sizes. This website also integrates a custom horizontal slider. I extensively used material UI for this project.You can look for exercises based on equipment, target muscle area and much more. Furthermore this will provide you with additional information on similar exercises and how to perform them." githubLink='https://github.com/DakshTevathia/FitnessApp.git' projectImage={fitnessAppProjectImage} />
            </div>
        </div>
    )
}

export default ProjectsContent
