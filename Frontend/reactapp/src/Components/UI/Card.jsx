import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const clname = `${classes.container} ${props.clname}`;
  return <div className={clname}>{props.children}</div>;
};

export default Card;
