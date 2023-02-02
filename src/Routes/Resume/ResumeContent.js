import React from "react";
import classes from "./ResumeContent.module.css";
import WorkExpCard from "./WorkExpCard";

const ResumeContent = () => {
  return (
    <div className={classes.contentDiv}>
      <div className={classes.resumeContainer}>
        <div className={classes.resumeGrid}>
          {/* <div className={classes.workExp}> */}
          <WorkExpCard
            title="Software Developer"
            company="NowFlow Technologies Pvt Limited"
            time="08/2022 - Present, Bengaluru, Karnataka"
            desc=" (Developing Popin Product to be
                        the largest video shopping network in the world) Designed intuitive
                        graphical user interfaces to improve user experience. Created the full
                        shoppable videos interface for the Popin product, Also created the full
                        dashboard for shoppable video in React JS. Learnt PHP, Laravel for
                        backend processes and integrated the dashboard for shoppable videos
                        using the same. Offered experience with React, Laravel in the
                        organization."
          />
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

          <WorkExpCard
            id="IntellisoftTechnologies"
            title="Associate Software Developer"
            company="Intellisoft Technologies"
            time=" 09/2021 - 08/2022, Noida,UttarPradesh"
            desc={`(Service based company working towards making Ideas into Reality)
              Updated old code bases to modern development standards, improving functionality.
               Actively worked in an agile software development environment which utilized the Scrum process.
                Designed and implemented a web application portal in ReactJS and other React libraries that help to collect, manipulate and visualize data & documents related to mines  across the globe.`}
          />
          {/* </div> */}

          <div className={classes.education}>
            <h2>Education</h2>
            <br />
            B.Tech(E.C.E)
            <br /> Maharaja Surajmal Institute of Technology(Guru Gobind Singh
            Indraprastha University,New Delhi) <br />
            07/2017 - 07/2021, 7.64 <br />
            <br />
            XII
            <br /> Shah International Public School
            <br /> 04/2016 - 04/2017, 80%
            <br /> <br />X<br /> Shah International Public School <br />
            04/2014 - 04/2015, 9.8
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
              <div className={classes.item}>Online-Media/Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
