import classes from "./AboutContent.module.css";
import React from "react";

const AboutContent = () => {
  return (
    <div className={classes.hero_img_projects}>
      <div className={classes.aboutMyself}>
        <p>
          I am a self taught developer who spend his leisure time watching
          Podcasts & Movies or playing Football as often as possible. I love
          playing football and am very passionate about the sport.It helps me
          unwind, relax as well as boosts my creativity and analytical thinking
          skills. I have a pet dog named Rocky(Beautiful German Shepherd) and
          spending time with him is one of my favourite things to do.I also do
          love to travel and you might've guessed that I prefer mountains over
          beaches which is absolutely true.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
