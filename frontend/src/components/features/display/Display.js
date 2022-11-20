import React from "react";
import mobile from "../assets/mobile.png";
import tablet from "../assets/tablet.png";
import desktop from "../assets/desktop.png";
import classes from "./Display.module.css";
import PropTypes from "prop-types";
const Display = ({ width }) => {
  width.toString();
  let image = mobile;
  if (width >= 640 && width < 1024) {
    image = tablet;
  } else if (width >= 1024) {
    image = desktop;
  }
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="display" />
      <img className={classes.overlay} src={image} alt="display" />
    </div>
  );
};
Display.propTypes = {
  width: PropTypes.string
};
export default Display;
