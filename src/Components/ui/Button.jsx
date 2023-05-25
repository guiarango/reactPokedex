import React from "react";

import { Link } from "react-router-dom";

//STYLES
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.url} className={`${classes.button} ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default Button;
