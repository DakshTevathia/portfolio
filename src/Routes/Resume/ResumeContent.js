import React from 'react'
import classes from './ResumeContent.module.css';

const ResumeContent = () => {
    return (
        <div>
            <div className={classes.contentDiv}>
                <div className={classes.resumeContainer}>
                    <div className={classes.resumeGrid}>
                        <div className={classes.workExp}>
                            Work Exp. Here
                        </div>
                        <div className={classes.skills}>
                            <h2>Skills</h2>
                            <div>
                                <div className={classes.item}>JavaScript</div>
                                <div className={classes.item}>React</div>
                                <div className={classes.item}>HTML</div>
                                <div className={classes.item}>CSS</div>
                                <div className={classes.item}>Redux</div>
                                <div className={classes.item}>Git</div>
                                <div className={classes.item}>C++</div>
                            </div>
                        </div>
                        <div className={classes.education}>
                            <h2>Education</h2>
                            Education Here
                        </div>
                        <div className={classes.languages}>
                            <h2>Languages</h2>
                            <div>
                                <div className={classes.item}>Hindi</div>
                                <div className={classes.item}>English</div>
                            </div>
                        </div>
                        <div className={classes.interests}>
                            <h2>Hobbies</h2>
                            <div>
                                <div className={classes.item}>Football</div>
                                <div className={classes.item}>Dog </div>
                                <div className={classes.item}>Music</div>
                                <div className={classes.item}>Athletics/Sports</div>
                                <div className={classes.item}>Online-Media</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeContent
