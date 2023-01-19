import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ResumeContent from './ResumeContent'
import classes from './ResumeContent.module.css'

const Resume = () => {
    return (
        <div className={classes.resume_background}>
            <div className={classes.navbarPostioning}>
                <Navbar />
            </div>
            <ResumeContent />
            <div className={classes.footerPositioning}>
                <Footer />
            </div>
        </div>
    )
}

export default Resume
