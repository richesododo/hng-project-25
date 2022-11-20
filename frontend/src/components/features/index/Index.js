import React, { useEffect, useState } from "react";
import Display from "../display/Display";
import Experience from "../experience/Experience";
import GetStarted from "../getstarted/GetStarted";
import classes from "./Index.module.css";

const Index = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function windowlistener() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowlistener);

    return () => {
      window.removeEventListener("resize", windowlistener);
    };
  });

  return (
    <div className={classes.container}>
      <div className={classes.gridcontainer}>
        <GetStarted />
        <Display width={width} />
      </div>
      <Experience />
    </div>
  );
};
export default Index;
