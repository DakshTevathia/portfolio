import React from "react";
import classes from "./ResumeContent.module.css";

const WorkExpCard = ({ title, time, desc, company }) => {
  return (
    <div className={classes.containerJobExp}>
      <div className={classes.title_and_time}>
        <h2>
          {title} at{" "}
          <h2 style={{ color: "white", marginBottom: "6px" }}>{company}</h2>
        </h2>
        <div>{time}</div>
      </div>
      <div className={classes.work_info}>{desc}</div>
    </div>
  );
};

export default WorkExpCard;
