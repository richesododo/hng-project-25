import React from "react";
import classes from "../getstarted/GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className={classes.getstarted}>
      <h4 className={classes.heading}>
        Identify VIP customers and give them the
        <span className={classes.span}> Five-Star </span>
        treatment they deserve
      </h4>
      <p className={classes.paragraph}>
        Discover, view & rank VIPs on your platform with Axe API. Harness the
        power of data to grow your business through unique VIP offerings and
        partnerships.
      </p>
      <button className={classes.button}>Get Started</button>
    </div>
  );
};
export default GetStarted;
